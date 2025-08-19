'use client';

import { useState, useEffect } from 'react';
import { analytics, AnalyticsData } from '@/lib/analytics/realTimeTracker';

export function useRealTimeAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!analytics) return;

    const updateData = () => {
      if (!analytics) {
        setIsLoading(false);
        return;
      }
      const analyticsData = analytics.getAnalyticsData();
      setData(analyticsData);
      setIsLoading(false);
    };

    // Carregar dados iniciais
    updateData();

    // Listener para mudanças no localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'botanique_analytics') {
        updateData();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const trackWhatsApp = () => {
    analytics?.trackWhatsAppClick();
  };

  const trackPhone = () => {
    analytics?.trackPhoneClick();
  };

  const trackPhoto = (photoData?: any) => {
    analytics?.trackPhotoView(photoData);
  };

  const trackContact = () => {
    analytics?.trackContactScroll();
  };

  const trackVisit = () => {
    analytics?.trackVisitSchedule();
  };

  const trackAdmin = () => {
    analytics?.trackAdminAccess();
  };

  const clearData = () => {
    analytics?.clearData();
    setData(null);
  };

  return {
    data,
    isLoading,
    trackWhatsApp,
    trackPhone,
    trackPhoto,
    trackContact,
    trackVisit,
    trackAdmin,
    clearData
  };
}

export default useRealTimeAnalytics;
