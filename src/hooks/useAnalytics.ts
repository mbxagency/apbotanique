import { useEffect, useCallback } from 'react';
import { getTracker, initAnalytics } from '@/lib/analytics/tracker';

export const useAnalytics = () => {
  useEffect(() => {
    // Initialize analytics when component mounts
    initAnalytics();
  }, []);

  const trackPageView = useCallback(() => {
    const tracker = getTracker();
    tracker.trackPageView();
  }, []);

  const trackContact = useCallback((contactData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    source: 'form' | 'whatsapp' | 'phone' | 'email';
    page: string;
  }) => {
    const tracker = getTracker();
    tracker.trackContact({
      ...contactData,
      status: 'new'
    });
  }, []);

  const trackEvent = useCallback((eventName: string, eventData?: Record<string, any>) => {
    const tracker = getTracker();
    tracker.trackEvent(eventName, eventData);
  }, []);

  const getAnalyticsData = useCallback(() => {
    const tracker = getTracker();
    return {
      visits: tracker.getVisits(),
      contacts: tracker.getContacts(),
      events: tracker.getEvents(),
      stats: tracker.getStats()
    };
  }, []);

  const clearAnalyticsData = useCallback(() => {
    const tracker = getTracker();
    tracker.clearData();
  }, []);

  return {
    trackPageView,
    trackContact,
    trackEvent,
    getAnalyticsData,
    clearAnalyticsData
  };
}; 