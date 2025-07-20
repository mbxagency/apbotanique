# 🏠 Botanique - Apartamento no Jardim Botânico

Site profissional para venda de apartamento no Jardim Botânico, Curitiba, com sistema completo de administração e analytics.

## ✨ Características

### 🎨 Design & UX
- **Identidade Visual Profissional**: Baseada no projeto original do Botanique
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Performance Otimizada**: Carregamento rápido e SEO-friendly

### 📊 Sistema de Administração
- **Dashboard Completo**: Visão geral de métricas e performance
- **Tracking de Visitas**: Monitoramento detalhado de visitantes
- **Gestão de Contatos**: Sistema de leads e follow-up
- **Analytics Avançado**: Métricas de conversão e comportamento
- **Exportação de Dados**: Relatórios em JSON para análise

### 🏗️ Tecnologias
- **Next.js 14+**: App Router e Server Components
- **TypeScript**: Tipagem estática e desenvolvimento seguro
- **Tailwind CSS**: Estilização moderna e responsiva
- **Lucide React**: Ícones consistentes e otimizados
- **LocalStorage**: Armazenamento local de analytics

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/apbotanique.git
cd apbotanique

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Abra http://localhost:3000
```

## 📁 Estrutura do Projeto

```
apbotanique/
├── src/
│   ├── app/
│   │   ├── admin/           # Painel de administração
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página inicial
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Seções da página
│   │   └── ui/              # Componentes reutilizáveis
│   ├── hooks/
│   │   └── useAnalytics.ts  # Hook para analytics
│   ├── lib/
│   │   ├── analytics/       # Sistema de tracking
│   │   ├── config/          # Configurações
│   │   ├── constants/       # Constantes
│   │   ├── types/           # Tipos TypeScript
│   │   └── utils/           # Utilitários
│   └── styles/              # Estilos globais
├── public/                  # Imagens e assets
└── docs/                    # Documentação
```

## 📊 Sistema de Analytics

### Funcionalidades
- **Tracking Automático**: Visitas, páginas, tempo de sessão
- **Detecção de Dispositivo**: Desktop, mobile, tablet
- **Origem do Tráfego**: Google, WhatsApp, direto, etc.
- **Eventos Personalizados**: Cliques, formulários, scroll
- **Armazenamento Local**: Dados persistidos no navegador

### Métricas Coletadas
- Total de visitas
- Visitantes únicos
- Tempo médio de sessão
- Páginas mais visitadas
- Taxa de conversão
- Origem do tráfego
- Contatos recebidos

## 🎛️ Painel de Administração

### Acesso
```
http://localhost:3000/admin
```

### Funcionalidades

#### 📈 Dashboard
- Visão geral das métricas principais
- Gráficos de performance
- Páginas mais visitadas
- Taxa de conversão em tempo real

#### 👥 Visitas
- Histórico completo de visitas
- Detalhes técnicos (IP, User Agent)
- Duração de sessão
- Origem do tráfego
- Filtros e busca

#### 📞 Contatos
- Leads recebidos via formulário
- Status de follow-up
- Informações completas do contato
- Gestão de status (Novo, Contactado, Interessado)

#### 📊 Analytics
- Métricas detalhadas de performance
- Análise de comportamento
- Relatórios de conversão
- Exportação de dados

### Comandos Úteis

```bash
# Limpar dados de analytics
# Disponível no painel admin

# Exportar dados
# Botão "Exportar" no painel admin

# Atualização automática
# Dados atualizados a cada 30 segundos
```

## 🎨 Identidade Visual

### Cores Principais
- **Verde Principal**: `#16a34a` (Botanique Green)
- **Verde Claro**: `#4ade80` (Accent)
- **Verde Escuro**: `#15803d` (Dark)
- **Dourado**: `#fbbf24` (Gold)
- **Creme**: `#fef3c7` (Cream)

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Hierarquia**: Títulos, subtítulos, corpo, legendas

### Componentes
- **Cards**: Sombras suaves, bordas arredondadas
- **Botões**: Gradientes, hover effects
- **Formulários**: Validação visual, estados de foco
- **Navegação**: Sticky header, smooth scroll

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

### Otimizações
- **Imagens**: Lazy loading, formatos otimizados
- **Performance**: Code splitting, bundle optimization
- **SEO**: Meta tags, structured data
- **Acessibilidade**: ARIA labels, keyboard navigation

## 🔧 Configuração

### Variáveis de Ambiente
```env
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ENABLED=true
```

### Personalização
1. **Cores**: Edite `tailwind.config.ts`
2. **Conteúdo**: Modifique `src/lib/config/site.ts`
3. **Analytics**: Configure `src/lib/analytics/tracker.ts`
4. **Estilos**: Ajuste `src/styles/globals.css`

## 📈 Métricas do Imóvel

### Especificações
- **Área Privativa**: 80m²
- **Área Total**: 113m²
- **Quartos**: 2 (1 suíte)
- **Vagas**: 2
- **Banheiros**: 2
- **Ano**: 2020 (primeiro morador)

### Valores
- **Preço**: R$ 729.000,00
- **Condomínio**: R$ 254,10/mês
- **IPTU**: R$ 1.050/ano
- **Economia**: 21% abaixo da média

### Localização
- **Endereço**: Av. Prefeito Maurício Fruet, 1270
- **Bairro**: Jardim Botânico, Curitiba
- **Distância**: 700m do Jardim Botânico
- **CEP**: 82900-010

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Outras Plataformas
- **Netlify**: Compatível com Next.js
- **Railway**: Deploy automático
- **DigitalOcean**: App Platform
- **AWS**: Amplify ou EC2

## 📞 Suporte

### Contatos
- **Telefone**: (41) 99149-0708
- **WhatsApp**: (41) 99132-8657
- **Email**: contato@arauimoveis.com.br
- **Imobiliária**: Arau Imóveis

### Documentação
- **Componentes**: `/src/components/`
- **Hooks**: `/src/hooks/`
- **Utilitários**: `/src/lib/utils/`
- **Tipos**: `/src/types/`

## 📄 Licença

Este projeto é privado e proprietário. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para o Botanique**
