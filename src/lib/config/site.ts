// Configuração centralizada do site Botanique
export const siteConfig = {
  // Informações básicas
  name: 'Botanique',
  description: 'Apartamento semi mobiliado no Jardim Botânico, Curitiba',
  url: 'https://botanique.arauimoveis.com.br',
  
  // Informações do imóvel
  property: {
    type: 'Apartamento Semi Mobiliado',
    area: '80m²',
    bedrooms: 2,
    suites: 1,
    parking: 2,
    price: 'R$ 729.000,00',
    address: {
      street: 'Av. Prefeito Maurício Fruet, 1270',
      neighborhood: 'Jardim Botânico',
      city: 'Curitiba',
      state: 'PR',
      zipCode: '80210-090',
      country: 'Brasil'
    }
  },

  // Informações de contato
  contact: {
    phone: '(41) 99149-0708',
    whatsapp: '(41) 99132-8657',
    email: 'contato@arauimoveis.com.br',
    company: 'Arau Imóveis'
  },

  // Redes sociais
  social: {
    instagram: 'https://instagram.com/arauimoveis',
    facebook: 'https://facebook.com/arauimoveis',
    whatsapp: 'https://wa.me/5541991328657'
  },

  // SEO
  seo: {
    title: 'Botanique - Apartamento no Jardim Botânico | Arau Imóveis',
    description: 'Apartamento semi mobiliado de 80m² no Jardim Botânico, Curitiba. 2 quartos (1 suíte), 2 vagas, academia, áreas comuns. R$ 729.000,00',
    keywords: [
      'apartamento',
      'jardim botânico',
      'curitiba',
      'arau imóveis',
      'botanique',
      'semi mobiliado',
      '2 quartos',
      'suíte',
      'academia',
      'áreas comuns'
    ]
  },

  // Configurações de imagens
  images: {
    hero: '/images/fachada/fachada1.jpg',
    og: '/images/fachada/fachada1.jpg',
    favicon: '/favicon.ico'
  }
} as const;

export type SiteConfig = typeof siteConfig; 