import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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

export const metadata: Metadata = {
  title: '🔥 APARTAMENTO À VENDA NO JARDIM BOTÂNICO CURITIBA | ÚLTIMA UNIDADE | Desconto Especial!',
  description: '🔥 APARTAMENTO À VENDA NO JARDIM BOTÂNICO! 2 quartos + suíte, 89m², acabamento de luxo, 2 vagas. Localização privilegiada em Curitiba. ÚLTIMA UNIDADE - Desconto especial! Agende sua visita hoje mesmo!',
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
  ].join(', '),
  authors: [{ name: 'Arau Imóveis' }],
  creator: 'Arau Imóveis',
  publisher: 'Arau Imóveis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://apbotanique.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '🔥 APARTAMENTO À VENDA NO JARDIM BOTÂNICO CURITIBA | ÚLTIMA UNIDADE | Desconto Especial!',
    description: '🔥 APARTAMENTO À VENDA NO JARDIM BOTÂNICO! 2 quartos + suíte, 89m², acabamento de luxo, 2 vagas. Localização privilegiada em Curitiba. ÚLTIMA UNIDADE - Desconto especial! Agende sua visita hoje mesmo!',
    url: 'https://apbotanique.vercel.app',
    siteName: 'Arau Imóveis - Apartamento à Venda',
    images: [
      {
        url: '/images/fachada/fachada1.jpg',
        width: 1200,
        height: 630,
        alt: 'Apartamento à Venda no Jardim Botânico - Última Unidade',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '🔥 APARTAMENTO À VENDA NO JARDIM BOTÂNICO CURITIBA | ÚLTIMA UNIDADE | Desconto Especial!',
    description: '🔥 APARTAMENTO À VENDA NO JARDIM BOTÂNICO! 2 quartos + suíte, 89m², acabamento de luxo, 2 vagas. Localização privilegiada em Curitiba. ÚLTIMA UNIDADE - Desconto especial!',
    images: ['/images/fachada/fachada1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Structured Data for Google
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Apartamento à Venda - Residencial Botanique",
  "description": "APARTAMENTO À VENDA NO JARDIM BOTÂNICO! 2 quartos + suíte, 89m², acabamento de luxo, 2 vagas. ÚLTIMA UNIDADE - Desconto especial!",
  "brand": {
    "@type": "Brand",
    "name": "Arau Imóveis"
  },
  "offers": {
    "@type": "Offer",
    "price": "729000",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "RealEstateAgent",
      "name": "Arau Imóveis",
      "telephone": "+5541991328657",
      "email": "contato@arauimoveis.com.br"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Prefeito Maurício Fruet, 1270",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "postalCode": "80210-090",
    "addressCountry": "BR"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Área",
      "value": "89m²"
    },
    {
      "@type": "PropertyValue",
      "name": "Quartos",
      "value": "2"
    },
    {
      "@type": "PropertyValue",
      "name": "Vagas",
      "value": "2"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#16a34a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17368785898"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17368785898');
          `}
        </Script>
        
        {/* Event snippet for Ver rota conversion page */}
        <Script id="google-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-17368785898/RRFcCMid8PIaEOrHitpA'});
          `}
        </Script>
        
        {/* Event snippets for conversion tracking */}
        <Script id="google-events" strategy="afterInteractive">
          {`
            // Função para rastrear conversões
            function trackConversion(action, label) {
              gtag('event', 'conversion', {
                'send_to': 'AW-17368785898/RRFcCMid8PIaEOrHitpA',
                'event_category': 'engagement',
                'event_action': action,
                'event_label': label
              });
            }
            
            // Rastrear cliques em WhatsApp
            function trackWhatsAppClick() {
              trackConversion('whatsapp_click', 'reserva_whatsapp');
            }
            
            // Rastrear agendamento de visita
            function trackVisitScheduling() {
              trackConversion('visit_scheduling', 'agendar_visita');
            }
            
            // Rastrear visualização de fotos
            function trackPhotoView() {
              trackConversion('photo_view', 'ver_fotos');
            }
            
            // Rastrear contato por telefone
            function trackPhoneCall() {
              trackConversion('phone_call', 'contato_telefone');
            }
            
            // Rastrear scroll até seção de contato
            function trackContactScroll() {
              trackConversion('contact_scroll', 'secao_contato');
            }
            
            // Disponibilizar funções globalmente
            window.trackConversion = trackConversion;
            window.trackWhatsAppClick = trackWhatsAppClick;
            window.trackVisitScheduling = trackVisitScheduling;
            window.trackPhotoView = trackPhotoView;
            window.trackPhoneCall = trackPhoneCall;
            window.trackContactScroll = trackContactScroll;
          `}
        </Script>
        

        
        {/* Schema.org structured data */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
