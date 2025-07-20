# 📸 Organização das Imagens - Botanique

## 🎯 Estrutura Organizada

Todas as imagens do projeto Botanique estão organizadas de forma profissional na pasta `assets/images/` com categorização clara por ambiente.

## 📁 Categorias Implementadas

### **🏢 Fachada (3 imagens)**
- `fachada1.jpg` - Fachada principal
- `fachada2.jpg` - Fachada lateral
- `vista.jpg` - Vista panorâmica

### **🛋️ Sala (8 imagens)**
- `sala1.jpg` - Sala de estar - ângulo 1
- `sala2.jpg` - Sala de estar - ângulo 2
- `sala3.jpg` - Sala de estar - ângulo 3
- `sala4.jpg` - Sala de estar - ângulo 4
- `sala5.jpg` - Sala de estar - ângulo 5
- `sala6.jpg` - Sala de estar - ângulo 6
- `sala7.jpg` - Sala de estar - ângulo 7
- `sala8.jpg` - Sala de estar - ângulo 8

### **🛏️ Suite (5 imagens)**
- `suite1.jpg` - Suíte master - ângulo 1
- `suite2.jpg` - Suíte master - ângulo 2
- `suite3.jpg` - Suíte master - ângulo 3
- `suite4.jpg` - Suíte master - ângulo 4
- `suite5.jpg` - Suíte master - ângulo 5

### **🍳 Cozinha (3 imagens)**
- `cozinha1.jpg` - Cozinha gourmet - ângulo 1
- `cozinha2.jpg` - Cozinha gourmet - ângulo 2
- `cozinha3.jpg` - Cozinha gourmet - ângulo 3

### **🚪 Quartos (3 imagens)**
- `quarto1.jpg` - Quarto 1
- `quarto2.jpg` - Quarto 2
- `hall-quartos.jpg` - Hall de acesso aos quartos

### **🌿 Sacada (3 imagens)**
- `sacada1.jpg` - Sacada - ângulo 1
- `sacada2.jpg` - Sacada - ângulo 2
- `sacada3.jpg` - Sacada - ângulo 3

### **💪 Academia (4 imagens)**
- `academia1.jpg` - Academia - ângulo 1
- `academia2.jpg` - Academia - ângulo 2
- `academia3.jpg` - Academia - ângulo 3
- `academia4.jpg` - Academia - ângulo 4

### **🏊 Áreas Comuns (3 imagens)**
- `salao1.jpg` - Salão de festas - ângulo 1
- `salao2.jpg` - Salão de festas - ângulo 2
- `terraço.jpg` - Terraço com vista

### **🔧 Infraestrutura (4 imagens)**
- `bwc-social.jpg` - Banheiro social
- `bwc-suite.jpg` - Banheiro da suíte
- `lavanderia.jpg` - Lavanderia
- `vagas-garagem.jpg` - Vagas de garagem

### **📸 Galeria (0 imagens)**
- Pasta reservada para imagens gerais da galeria

### **🎯 Hero (0 imagens)**
- Pasta reservada para imagens do slider principal

### **🖼️ Thumbnails (0 imagens)**
- Pasta reservada para miniaturas das imagens

## 📊 Estatísticas

| Categoria | Quantidade | Tamanho Total |
|-----------|------------|---------------|
| **Fachada** | 3 | ~683KB |
| **Sala** | 8 | ~1.2MB |
| **Suite** | 5 | ~627KB |
| **Cozinha** | 3 | ~521KB |
| **Quartos** | 3 | ~233KB |
| **Sacada** | 3 | ~544KB |
| **Academia** | 4 | ~577KB |
| **Áreas Comuns** | 3 | ~424KB |
| **Infraestrutura** | 4 | ~506KB |
| **Total** | **36** | **~5.3MB** |

## 🔧 Como Usar

### **No Projeto Next.js**
```typescript
// Importar configuração
import { siteConfig } from '@/lib/config/site'

// Usar imagens categorizadas
const fachadaImages = siteConfig.gallery.categories.fachada
const salaImages = siteConfig.gallery.categories.sala
```

### **Adicionando Novas Imagens**
1. **Identifique a categoria** apropriada
2. **Coloque na pasta** correspondente
3. **Atualize a configuração** em `src/lib/config/site.ts`
4. **Documente** se necessário

### **Nomenclatura**
- **Padrão**: `[categoria][número].jpg`
- **Exemplo**: `sala1.jpg`, `suite2.jpg`, `cozinha3.jpg`
- **Consistência**: Sempre em minúsculas, sem espaços

## 🎨 Otimizações

### **Formato**
- **Formato**: JPEG para fotos
- **Qualidade**: 85% (boa relação qualidade/tamanho)
- **Resolução**: Otimizada para web

### **Tamanhos**
- **Hero**: 1920x1080px
- **Galeria**: 1200x800px
- **Thumbnails**: 400x300px

### **Performance**
- **Lazy loading** implementado
- **Compressão** otimizada
- **Cache** configurado

## 📱 Responsividade

### **Breakpoints**
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### **Adaptação**
- **Imagens responsivas** com `next/image`
- **Sizes** otimizados por dispositivo
- **Placeholder** blur durante carregamento

## 🔍 SEO

### **Alt Text**
- **Descritivo** e relevante
- **Keywords** incluídas
- **Contexto** do imóvel

### **Structured Data**
- **RealEstateListing** schema
- **ImageObject** para cada imagem
- **LocalBusiness** para imobiliária

## 🚀 Benefícios

### **Para Desenvolvedores**
- **Facilidade de localização**
- **Manutenção simplificada**
- **Escalabilidade garantida**

### **Para Performance**
- **Carregamento otimizado**
- **Bundle size reduzido**
- **Cache eficiente**

### **Para SEO**
- **Estrutura clara**
- **Meta dados organizados**
- **Indexação melhorada**

---

## ✅ Resultado

**As 36 imagens do projeto Botanique estão perfeitamente organizadas em 9 categorias, totalizando 5.3MB de recursos otimizados e prontos para uso profissional!** 🎉

### **Principais conquistas:**
- ✅ **Categorização clara** por ambiente
- ✅ **Nomenclatura consistente** implementada
- ✅ **Estrutura escalável** para futuras adições
- ✅ **Performance otimizada** com lazy loading
- ✅ **SEO melhorado** com alt texts
- ✅ **Manutenibilidade** facilitada
- ✅ **Documentação completa** e atualizada

**Organização profissional implementada com sucesso!** 🚀 