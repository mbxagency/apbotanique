'use client';

export interface UserSession {
  id: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  ip?: string;
  userAgent: string;
  location?: string;
  device: string;
  referrer: string;
  actions: UserAction[];
}

export interface UserAction {
  id: string;
  sessionId: string;
  type: 'page_view' | 'whatsapp_click' | 'phone_click' | 'photo_view' | 'contact_scroll' | 'visit_schedule' | 'admin_access';
  timestamp: number;
  data: any;
  element?: string;
  coordinates?: { x: number; y: number };
}

export interface AnalyticsData {
  sessions: UserSession[];
  actions: UserAction[];
  stats: {
    totalPageViews: number;
    uniqueVisitors: number;
    averageSessionDuration: number;
    bounceRate: number;
    conversionRate: number;
    topPages: string[];
    topDevices: { [key: string]: number };
    topLocations: { [key: string]: number };
    topReferrers: { [key: string]: number };
  };
}

class RealTimeAnalytics {
  private currentSession: UserSession | null = null;
  private storageKey = 'botanique_analytics';
  private sessionStorageKey = 'botanique_session';
  private recentActions: Set<string> = new Set(); // Para evitar ações duplicadas

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeSession().catch(console.error);
      this.setupBeforeUnload();
    }
  }

  private async initializeSession() {
    const existingSessionId = sessionStorage.getItem(this.sessionStorageKey);
    
    if (existingSessionId) {
      // Continuar sessão existente
      const data = this.getStoredData();
      this.currentSession = data.sessions.find(s => s.id === existingSessionId) || null;
      if (this.currentSession) {
        this.currentSession.lastActivity = Date.now();
      }
    }

    if (!this.currentSession) {
      // Criar nova sessão
      this.currentSession = {
        id: this.generateId(),
        startTime: Date.now(),
        lastActivity: Date.now(),
        pageViews: 0,
        userAgent: navigator.userAgent,
        device: this.detectDevice(),
        referrer: document.referrer || 'Direct',
        actions: []
      };

      sessionStorage.setItem(this.sessionStorageKey, this.currentSession.id);
      
      // Detectar localização para nova sessão
      this.detectLocation();
    }

    // Registrar page view
    this.trackPageView();
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private detectDevice(): string {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/tablet|ipad|playbook|silk|(android(?!.*mobi))/.test(userAgent)) {
      return 'Tablet';
    }
    
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/.test(userAgent)) {
      return 'Mobile';
    }
    
    return 'Desktop';
  }

  private async detectLocation() {
    try {
      // Usar API gratuita para detectar IP e localização
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (this.currentSession && data.city && data.region) {
        this.currentSession.location = `${data.city}, ${data.region}, ${data.country_name}`;
        this.currentSession.ip = data.ip;
        this.saveSession();
      }
    } catch (error) {
      console.log('Location detection failed, trying fallback');
      try {
        // Fallback para outra API
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        if (this.currentSession) {
          this.currentSession.ip = data.ip;
          this.currentSession.location = 'Unknown Location';
          this.saveSession();
        }
      } catch (fallbackError) {
        console.log('All location detection failed');
        if (this.currentSession) {
          this.currentSession.location = 'Unknown';
          this.currentSession.ip = 'Unknown';
        }
      }
    }
  }

  private setupBeforeUnload() {
    window.addEventListener('beforeunload', () => {
      this.saveSession();
    });

    // Salvar periodicamente
    setInterval(() => {
      this.saveSession();
    }, 30000); // A cada 30 segundos
  }

  private getStoredData(): AnalyticsData {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing analytics data:', error);
      }
    }

    return {
      sessions: [],
      actions: [],
      stats: {
        totalPageViews: 0,
        uniqueVisitors: 0,
        averageSessionDuration: 0,
        bounceRate: 0,
        conversionRate: 0,
        topPages: [],
        topDevices: {},
        topLocations: {},
        topReferrers: {}
      }
    };
  }

  private saveSession() {
    if (!this.currentSession) return;

    const data = this.getStoredData();
    
    // Limpar dados antigos (mais de 7 dias) para otimizar desempenho
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    data.sessions = data.sessions.filter(s => s.startTime > sevenDaysAgo);
    data.actions = data.actions.filter(a => a.timestamp > sevenDaysAgo);
    
    // Atualizar ou adicionar sessão
    const sessionIndex = data.sessions.findIndex(s => s.id === this.currentSession!.id);
    if (sessionIndex >= 0) {
      data.sessions[sessionIndex] = this.currentSession;
    } else {
      data.sessions.push(this.currentSession);
    }

    // Atualizar ações
    data.actions.push(...this.currentSession.actions.filter(a => 
      !data.actions.some(existing => existing.id === a.id)
    ));

    // Recalcular estatísticas
    this.calculateStats(data);

    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  private calculateStats(data: AnalyticsData) {
    const now = Date.now();

    data.stats.totalPageViews = data.sessions.reduce((sum, s) => sum + s.pageViews, 0);
    data.stats.uniqueVisitors = new Set(data.sessions.map(s => s.ip || s.id)).size;

    // Duração média da sessão
    const completedSessions = data.sessions.filter(s => 
      now - s.lastActivity > 5 * 60 * 1000 // Mais de 5 minutos inativo
    );
    
    if (completedSessions.length > 0) {
      data.stats.averageSessionDuration = completedSessions.reduce((sum, s) => 
        sum + (s.lastActivity - s.startTime), 0
      ) / completedSessions.length;
    }

    // Taxa de rejeição
    const singlePageSessions = data.sessions.filter(s => s.pageViews <= 1).length;
    data.stats.bounceRate = data.sessions.length > 0 ? 
      (singlePageSessions / data.sessions.length) * 100 : 0;

    // Taxa de conversão
    const conversions = data.actions.filter(a => 
      ['whatsapp_click', 'phone_click', 'visit_schedule'].includes(a.type)
    ).length;
    data.stats.conversionRate = data.sessions.length > 0 ? 
      (conversions / data.sessions.length) * 100 : 0;

    // Top devices
    data.stats.topDevices = {};
    data.sessions.forEach(s => {
      data.stats.topDevices[s.device] = (data.stats.topDevices[s.device] || 0) + 1;
    });

    // Top locations
    data.stats.topLocations = {};
    data.sessions.forEach(s => {
      if (s.location) {
        data.stats.topLocations[s.location] = (data.stats.topLocations[s.location] || 0) + 1;
      }
    });

    // Top referrers
    data.stats.topReferrers = {};
    data.sessions.forEach(s => {
      data.stats.topReferrers[s.referrer] = (data.stats.topReferrers[s.referrer] || 0) + 1;
    });
  }

  // Métodos públicos para tracking
  trackPageView() {
    if (!this.currentSession) return;

    this.currentSession.pageViews++;
    this.currentSession.lastActivity = Date.now();

    const action: UserAction = {
      id: this.generateId(),
      sessionId: this.currentSession.id,
      type: 'page_view',
      timestamp: Date.now(),
      data: {
        page: window.location.pathname,
        title: document.title
      }
    };

    this.currentSession.actions.push(action);
    this.saveSession();
  }

  trackWhatsAppClick() {
    this.trackAction('whatsapp_click', {
      button: 'WhatsApp',
      url: 'https://wa.me/5541991328657'
    });
  }

  trackPhoneClick() {
    this.trackAction('phone_click', {
      button: 'Phone',
      number: '+5541991328657'
    });
  }

  trackPhotoView(photoData?: any) {
    this.trackAction('photo_view', {
      photo: photoData || 'gallery'
    });
  }

  trackContactScroll() {
    this.trackAction('contact_scroll', {
      section: 'contact'
    });
  }

  trackVisitSchedule() {
    this.trackAction('visit_schedule', {
      button: 'Schedule Visit'
    });
  }

  trackAdminAccess() {
    this.trackAction('admin_access', {
      page: 'admin'
    });
  }

  private trackAction(type: UserAction['type'], data: any, element?: string) {
    if (!this.currentSession) return;

    // Criar chave única para evitar ações duplicadas (exceto page_view)
    const actionKey = `${type}-${this.currentSession.id}-${JSON.stringify(data)}`;
    
    // Para ações de conversão, implementar debounce de 5 segundos
    const conversionActions = ['whatsapp_click', 'phone_click', 'photo_view', 'visit_schedule'];
    if (conversionActions.includes(type)) {
      if (this.recentActions.has(actionKey)) {
        return; // Ignorar ação duplicada
      }
      
      // Adicionar à lista de ações recentes
      this.recentActions.add(actionKey);
      
      // Remover após 5 segundos
      setTimeout(() => {
        this.recentActions.delete(actionKey);
      }, 5000);
    }

    this.currentSession.lastActivity = Date.now();

    const action: UserAction = {
      id: this.generateId(),
      sessionId: this.currentSession.id,
      type,
      timestamp: Date.now(),
      data,
      ...(element && { element })
    };

    this.currentSession.actions.push(action);
    this.saveSession();

    // Chamar Google Analytics também
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', type, {
        event_category: 'engagement',
        event_label: JSON.stringify(data)
      });
    }
  }

  // Método para o admin
  getAnalyticsData(): AnalyticsData {
    return this.getStoredData();
  }

  // Método para limpar dados (admin)
  clearData() {
    localStorage.removeItem(this.storageKey);
    sessionStorage.removeItem(this.sessionStorageKey);
    this.currentSession = null;
  }

  // Obter sessões ativas
  getActiveSessions(): UserSession[] {
    const data = this.getStoredData();
    const now = Date.now();
    return data.sessions.filter(s => 
      now - s.lastActivity < 30 * 60 * 1000 // 30 minutos
    );
  }
}

// Instância global
export const analytics = typeof window !== 'undefined' ? new RealTimeAnalytics() : null;

export default RealTimeAnalytics;
