declare global {
  interface Window {
    trackConversion: (action: string, label: string) => void;
    trackWhatsAppClick: () => void;
    trackVisitScheduling: () => void;
    trackPhotoView: () => void;
    trackPhoneCall: () => void;
    trackContactScroll: () => void;
  }
}

export {}; 