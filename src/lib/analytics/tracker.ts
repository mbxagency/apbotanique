// Sistema de tracking de visitas para o Botanique
export interface VisitData {
  id: string;
  timestamp: number;
  date: string;
  time: string;
  ip: string;
  userAgent: string;
  page: string;
  referrer: string;
  source: string;
  duration: number;
  sessionId: string;
  deviceType: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  os: string;
  country?: string;
  city?: string;
}

export interface ContactData {
  id: string;
  timestamp: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  source: 'form' | 'whatsapp' | 'phone' | 'email';
  status: 'new' | 'contacted' | 'interested' | 'not_interested';
  page: string;
  sessionId: string;
}

class AnalyticsTracker {
  private sessionId: string;
  private startTime: number;
  private storageKey = 'botanique_analytics';

  constructor () {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.initializeTracking();
  }

  private generateSessionId (): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private getDeviceType (): 'desktop' | 'mobile' | 'tablet' {
    const userAgent = navigator.userAgent.toLowerCase();
    if ((/tablet|ipad|playbook|silk/i).test(userAgent)) {
      return 'tablet';
    }
    if ((/mobile|android|iphone|ipod|blackberry|opera mini|iemobile/i).test(userAgent)) {
      return 'mobile';
    }
    return 'desktop';
  }

  private getBrowser (): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) { return 'Chrome'; }
    if (userAgent.includes('Firefox')) { return 'Firefox'; }
    if (userAgent.includes('Safari')) { return 'Safari'; }
    if (userAgent.includes('Edge')) { return 'Edge'; }
    if (userAgent.includes('Opera')) { return 'Opera'; }
    return 'Unknown';
  }

  private getOS (): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Windows')) { return 'Windows'; }
    if (userAgent.includes('Mac')) { return 'macOS'; }
    if (userAgent.includes('Linux')) { return 'Linux'; }
    if (userAgent.includes('Android')) { return 'Android'; }
    if (userAgent.includes('iOS')) { return 'iOS'; }
    return 'Unknown';
  }

  private getSource (): string {
    const referrer = document.referrer;
    if (!referrer) { return 'Direct'; }
    if (referrer.includes('google')) { return 'Google'; }
    if (referrer.includes('facebook')) { return 'Facebook'; }
    if (referrer.includes('instagram')) { return 'Instagram'; }
    if (referrer.includes('whatsapp')) { return 'WhatsApp'; }
    if (referrer.includes('youtube')) { return 'YouTube'; }
    return 'Other';
  }

  private async getIPAddress (): Promise<string> {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return 'Unknown';
    }
  }

  private formatDate (timestamp: number): { date: string; time: string } {
    const date = new Date(timestamp);
    const dateStr = date.toISOString().split('T')[0];
    const timeStr = date.toTimeString().split(' ')[0];

    return {
      date: dateStr || '',
      time: timeStr || ''
    };
  }

  private initializeTracking (): void {
    // Track page load
    this.trackPageView();

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.trackPageLeave();
      } else {
        this.trackPageReturn();
      }
    });

    // Track before unload
    window.addEventListener('beforeunload', () => {
      this.trackPageLeave();
    });

    // Track navigation
    if (typeof window !== 'undefined' && 'history' in window) {
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = (...args) => {
        originalPushState.apply(history, args);
        this.trackPageView();
      };

      history.replaceState = (...args) => {
        originalReplaceState.apply(history, args);
        this.trackPageView();
      };

      window.addEventListener('popstate', () => {
        this.trackPageView();
      });
    }
  }

  public async trackPageView (): Promise<void> {
    const now = Date.now();
    const duration = now - this.startTime;

    const visitData: VisitData = {
      id: 'visit_' + now + '_' + Math.random().toString(36).substr(2, 9),
      timestamp: now,
      ...this.formatDate(now),
      ip: await this.getIPAddress(),
      userAgent: navigator.userAgent,
      page: window.location.pathname,
      referrer: document.referrer,
      source: this.getSource(),
      duration: Math.max(0, duration),
      sessionId: this.sessionId,
      deviceType: this.getDeviceType(),
      browser: this.getBrowser(),
      os: this.getOS()
    };

    this.saveVisitData(visitData);
    this.startTime = now;
  }

  public trackPageLeave (): void {
    const now = Date.now();
    const duration = now - this.startTime;

    // Update the last visit with final duration
    const visits = this.getStoredVisits();
    if (visits.length > 0) {
      const lastVisit = visits[visits.length - 1];
      if (lastVisit) {
        lastVisit.duration = Math.max(lastVisit.duration, duration);
        this.saveVisitsToStorage(visits);
      }
    }
  }

  public trackPageReturn (): void {
    this.startTime = Date.now();
  }

  public trackContact (contactData: Omit<ContactData, 'id' | 'timestamp' | 'sessionId'>): void {
    const contact: ContactData = {
      ...contactData,
      id: 'contact_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      sessionId: this.sessionId
    };

    this.saveContactData(contact);
  }

  public trackEvent (eventName: string, eventData?: Record<string, any>): void {
    const event = {
      id: 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      sessionId: this.sessionId,
      eventName,
      eventData,
      page: window.location.pathname
    };

    this.saveEventData(event);
  }

  private saveVisitData (visitData: VisitData): void {
    const visits = this.getStoredVisits();
    visits.push(visitData);

    // Keep only last 1000 visits to prevent storage overflow
    if (visits.length > 1000) {
      visits.splice(0, visits.length - 1000);
    }

    this.saveVisitsToStorage(visits);
  }

  private saveContactData (contactData: ContactData): void {
    const contacts = this.getStoredContacts();
    contacts.push(contactData);

    // Keep only last 500 contacts
    if (contacts.length > 500) {
      contacts.splice(0, contacts.length - 500);
    }

    this.saveContactsToStorage(contacts);
  }

  private saveEventData (eventData: any): void {
    const events = this.getStoredEvents();
    events.push(eventData);

    // Keep only last 1000 events
    if (events.length > 1000) {
      events.splice(0, events.length - 1000);
    }

    this.saveEventsToStorage(events);
  }

  private getStoredVisits (): VisitData[] {
    if (typeof window === 'undefined') { return []; }
    try {
      const stored = localStorage.getItem(`${this.storageKey}_visits`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private getStoredContacts (): ContactData[] {
    if (typeof window === 'undefined') { return []; }
    try {
      const stored = localStorage.getItem(`${this.storageKey}_contacts`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private getStoredEvents (): any[] {
    if (typeof window === 'undefined') { return []; }
    try {
      const stored = localStorage.getItem(`${this.storageKey}_events`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private saveVisitsToStorage (visits: VisitData[]): void {
    if (typeof window === 'undefined') { return; }
    try {
      localStorage.setItem(`${this.storageKey}_visits`, JSON.stringify(visits));
    } catch (error) {
      console.error('Error saving visits to storage:', error);
    }
  }

  private saveContactsToStorage (contacts: ContactData[]): void {
    if (typeof window === 'undefined') { return; }
    try {
      localStorage.setItem(`${this.storageKey}_contacts`, JSON.stringify(contacts));
    } catch (error) {
      console.error('Error saving contacts to storage:', error);
    }
  }

  private saveEventsToStorage (events: any[]): void {
    if (typeof window === 'undefined') { return; }
    try {
      localStorage.setItem(`${this.storageKey}_events`, JSON.stringify(events));
    } catch (error) {
      console.error('Error saving events to storage:', error);
    }
  }

  // Public methods to get analytics data
  public getVisits (): VisitData[] {
    return this.getStoredVisits();
  }

  public getContacts (): ContactData[] {
    return this.getStoredContacts();
  }

  public getEvents (): any[] {
    return this.getStoredEvents();
  }

  public getStats () {
    const visits = this.getVisits();
    const contacts = this.getContacts();

    const uniqueVisitors = new Set(visits.map(v => v.ip)).size;
    const totalVisits = visits.length;
    const totalContacts = contacts.length;
    const conversionRate = totalVisits > 0 ? (totalContacts / totalVisits) * 100 : 0;
    const avgDuration = visits.length > 0
      ? visits.reduce((acc, v) => acc + v.duration, 0) / visits.length
      : 0;

    // Get top pages
    const pageCounts = visits.reduce((acc, visit) => {
      acc[visit.page] = (acc[visit.page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topPages = Object.entries(pageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([page]) => page);

    return {
      totalVisits,
      uniqueVisitors,
      totalContacts,
      conversionRate,
      avgDuration,
      topPages
    };
  }

  public clearData (): void {
    if (typeof window === 'undefined') { return; }
    localStorage.removeItem(`${this.storageKey}_visits`);
    localStorage.removeItem(`${this.storageKey}_contacts`);
    localStorage.removeItem(`${this.storageKey}_events`);
  }
}

// Create singleton instance
let trackerInstance: AnalyticsTracker | null = null;

export const getTracker = (): AnalyticsTracker => {
  if (!trackerInstance) {
    trackerInstance = new AnalyticsTracker();
  }
  return trackerInstance;
};

export const initAnalytics = (): AnalyticsTracker => {
  return getTracker();
};
