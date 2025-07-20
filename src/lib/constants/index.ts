// Constantes do projeto Botanique

// Configurações de animação
export const ANIMATION_CONFIG = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
  stagger: 0.1
} as const;

// Breakpoints responsivos
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1600,
  '4xl': 1920
} as const;

// Configurações de imagens
export const IMAGE_CONFIG = {
  quality: 85,
  formats: ['image/webp', 'image/avif'] as const,
  sizes: {
    thumbnail: 150,
    small: 300,
    medium: 600,
    large: 1200,
    xlarge: 1920
  }
} as const;

// Configurações de SEO
export const SEO_CONFIG = {
  titleTemplate: '%s | Botanique - Arau Imóveis',
  defaultTitle: 'Botanique - Apartamento no Jardim Botânico | Arau Imóveis',
  defaultDescription: 'Apartamento semi mobiliado de 80m² no Jardim Botânico, Curitiba. 2 quartos (1 suíte), 2 vagas, academia, áreas comuns. R$ 729.000,00',
  siteUrl: 'https://botanique.arauimoveis.com.br',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    site_name: 'Botanique - Arau Imóveis'
  },
  twitter: {
    handle: '@arauimoveis',
    site: '@arauimoveis',
    cardType: 'summary_large_image'
  }
} as const;

// Configurações de formulário
export const FORM_CONFIG = {
  validation: {
    email: {
      required: 'Email é obrigatório',
      invalid: 'Email inválido'
    },
    phone: {
      required: 'Telefone é obrigatório',
      invalid: 'Telefone inválido'
    },
    name: {
      required: 'Nome é obrigatório',
      minLength: 'Nome deve ter pelo menos 2 caracteres'
    },
    message: {
      required: 'Mensagem é obrigatória',
      minLength: 'Mensagem deve ter pelo menos 10 caracteres'
    }
  },
  submit: {
    success: 'Mensagem enviada com sucesso!',
    error: 'Erro ao enviar mensagem. Tente novamente.',
    loading: 'Enviando...'
  }
} as const;

// Configurações de navegação
export const NAVIGATION = {
  main: [
    {label: 'Sobre', href: '#sobre'},
    {label: 'Diferenciais', href: '#diferenciais'},
    {label: 'Galeria', href: '#galeria'},
    {label: 'Localização', href: '#localizacao'},
    {label: 'Contato', href: '#contato'}
  ],
  footer: [
    {label: 'Política de Privacidade', href: '/privacidade'},
    {label: 'Termos de Uso', href: '/termos'},
    {label: 'Cookies', href: '/cookies'}
  ]
} as const;

// Configurações de contato
export const CONTACT_CONFIG = {
  phone: '(41) 99149-0708',
  whatsapp: '(41) 99132-8657',
  email: 'contato@arauimoveis.com.br',
  company: 'Arau Imóveis',
  address: {
    street: 'Av. Prefeito Maurício Fruet, 1270',
    neighborhood: 'Jardim Botânico',
    city: 'Curitiba',
    state: 'PR',
    zipCode: '80210-090',
    country: 'Brasil'
  },
  social: {
    instagram: 'https://instagram.com/arauimoveis',
    facebook: 'https://facebook.com/arauimoveis',
    whatsapp: 'https://wa.me/5541991328657'
  }
} as const;

// Configurações do imóvel
export const PROPERTY_CONFIG = {
  type: 'Apartamento Semi Mobiliado',
  area: '80m²',
  bedrooms: 2,
  suites: 1,
  parking: 2,
  price: 'R$ 729.000,00',
  features: [
    'Academia completa',
    'Salão de festas',
    'Terraço',
    'Sacada com churrasqueira',
    'Cozinha gourmet',
    'Suíte master',
    '2 vagas de garagem',
    'Portaria 24h',
    'Segurança',
    'Área de lazer'
  ],
  highlights: [
    'Localização privilegiada',
    'Próximo ao Jardim Botânico',
    'Fácil acesso ao centro',
    'Comércio próximo',
    'Transporte público',
    'Área nobre de Curitiba'
  ]
} as const;

// Configurações de performance
export const PERFORMANCE_CONFIG = {
  images: {
    lazyLoading: true,
    preload: true,
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
  },
  fonts: {
    preload: true,
    display: 'swap'
  },
  analytics: {
    enabled: true,
    trackingId: 'G-XXXXXXXXXX'
  }
} as const;

// Configurações de acessibilidade
export const ACCESSIBILITY_CONFIG = {
  skipLinks: [
    {label: 'Ir para o conteúdo', href: '#main-content'},
    {label: 'Ir para o menu', href: '#main-navigation'},
    {label: 'Ir para o rodapé', href: '#footer'}
  ],
  aria: {
    navigation: 'Navegação principal',
    main: 'Conteúdo principal',
    footer: 'Rodapé'
  }
} as const;

// Configurações de cache
export const CACHE_CONFIG = {
  static: {
    maxAge: 31536000, // 1 ano
    staleWhileRevalidate: 86400 // 1 dia
  },
  dynamic: {
    maxAge: 3600, // 1 hora
    staleWhileRevalidate: 60 // 1 minuto
  }
} as const;

// Configurações de segurança
export const SECURITY_CONFIG = {
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  },
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", 'data:', 'https:'],
    'font-src': ["'self'", 'https:']
  }
} as const;
