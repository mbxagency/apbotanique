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
    title: 'APARTAMENTO À VENDA NO JARDIM BOTÂNICO CURITIBA | ÚLTIMA UNIDADE | Desconto Especial!',
            description: 'APARTAMENTO À VENDA NO JARDIM BOTÂNICO! 2 quartos + suíte, 89m², acabamento de luxo, 2 vagas. Localização privilegiada em Curitiba. ÚLTIMA UNIDADE - Desconto especial! Agende sua visita hoje mesmo!',
    keywords: [
      'apartamento à venda jardim botânico curitiba',
      'apartamento 2 quartos suíte curitiba',
      'apartamento à venda curitiba centro',
      'residencial botanique à venda',
      'apartamento com 2 vagas jardim botânico',
      'apartamento acabamento luxo curitiba',
      'apartamento à venda urgente curitiba',
      'apartamento jardim botânico oportunidade',
      'apartamento curitiba investimento',
      'apartamento à venda com desconto',
      'apartamento 89m² jardim botânico',
      'apartamento condomínio fechado curitiba',
      'apartamento à venda último andar',
      'apartamento à venda oportunidade única',
      'apartamento à venda para família',
      'apartamento à venda com garagem',
      'apartamento à venda com academia',
      'apartamento à venda com salão de festas',
      'apartamento à venda com sacada gourmet',
      'apartamento à venda área nobre curitiba',
      'apartamento à venda valorização garantida',
      'apartamento à venda localização privilegiada',
      'apartamento à venda acabamento premium',
      'apartamento à venda infraestrutura completa'
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
