import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

// Metadados profissionais
export const metadata: Metadata = {
  title: {
    default: 'Botanique - Apartamento no Jardim Botânico | Arau Imóveis',
    template: '%s | Botanique - Arau Imóveis'
  },
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
  ],
  authors: [{name: 'Arau Imóveis'}],
  creator: 'Arau Imóveis',
  publisher: 'Arau Imóveis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://apbotanique.vercel.app'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://apbotanique.vercel.app',
    title: 'Botanique - Apartamento no Jardim Botânico | Arau Imóveis',
    description: 'Apartamento semi mobiliado de 80m² no Jardim Botânico, Curitiba. 2 quartos (1 suíte), 2 vagas, academia, áreas comuns.',
    siteName: 'Botanique - Arau Imóveis',
    images: [
      {
        url: '/images/fachada/fachada1.jpg',
        width: 1200,
        height: 630,
        alt: 'Fachada do apartamento Botanique'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Botanique - Apartamento no Jardim Botânico | Arau Imóveis',
    description: 'Apartamento semi mobiliado de 80m² no Jardim Botânico, Curitiba.',
    images: ['/images/fachada/fachada1.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'google-site-verification-code'
  }
};

// Structured Data para imóveis
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Apartamento Botanique',
  description: 'Apartamento semi mobiliado de 80m² no Jardim Botânico, Curitiba',
  brand: {
    '@type': 'Brand',
    name: 'Arau Imóveis'
  },
  offers: {
    '@type': 'Offer',
    price: '729000',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'RealEstateAgent',
      name: 'Arau Imóveis',
      telephone: '+5541991490708',
      email: 'contato@arauimoveis.com.br'
    }
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Prefeito Maurício Fruet, 1270',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    postalCode: '80210-090',
    addressCountry: 'BR'
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Área',
      value: '80m²'
    },
    {
      '@type': 'PropertyValue',
      name: 'Quartos',
      value: '2'
    },
    {
      '@type': 'PropertyValue',
      name: 'Vagas',
      value: '2'
    }
  ]
};

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#16a34a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
