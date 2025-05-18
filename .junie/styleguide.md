# ASAPA Style Guide

## Cores

### Cores Primárias

- **Azul Principal**: `#1d4ed8` - Usado para elementos principais, botões primários, links e destaques
- **Azul Escuro**: `#1e40af` - Usado para hover em botões primários
- **Azul Claro**: `#dbeafe` - Usado para backgrounds de badges e elementos secundários

### Cores Neutras

- **Preto**: `#000000` - Usado para textos principais
- **Cinza Escuro**: `#4b5563` - Usado para textos secundários
- **Cinza Médio**: `#9ca3af` - Usado para bordas e elementos desabilitados
- **Cinza Claro**: `#f3f4f6` - Usado para backgrounds de seções
- **Branco**: `#ffffff` - Usado para backgrounds e textos em fundos escuros

## Tipografia

### Fontes

- **Principal**: Geist Sans - Usada para todo o conteúdo textual
- **Mono**: Geist Mono - Usada para código e dados técnicos

### Tamanhos

- **Título Principal**: 3rem (48px) / 3.75rem (60px) em telas maiores
- **Título Secundário**: 2.25rem (36px) / 3rem (48px) em telas maiores
- **Título Terciário**: 1.5rem (24px) / 1.875rem (30px) em telas maiores
- **Texto Regular**: 1rem (16px) / 1.25rem (20px) em telas maiores
- **Texto Pequeno**: 0.875rem (14px)

## Componentes

### Botões

#### Botão Primário

```jsx
<Button className="bg-[#1d4ed8] hover:bg-[#1e40af]">
  Texto do Botão
</Button>
```

#### Botão Secundário

```jsx
<Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
  Texto do Botão
</Button>
```

#### Botão Fantasma

```jsx
<Button variant="ghost" className="text-[#1d4ed8]">
  Texto do Botão
</Button>
```

### Cabeçalhos de Seção

```jsx
<SectionHeader
  badge="Texto do Badge"
  title="Título da Seção"
  description="Descrição da seção que explica o propósito ou conteúdo."
  icon={<IconComponent size={32} className="text-[#1d4ed8]" />}
/>
```

### Cards

```jsx
<div className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm">
  {/* Conteúdo do card */}
</div>
```

## Ícones

Todos os ícones devem ser importados do diretório `components/icons` e devem incluir os seguintes atributos para
acessibilidade:

```jsx
<IconComponent 
  size={24} // Tamanho padrão, ajustar conforme necessário
  className="text-current" // Cor herdada do texto pai
  aria-hidden={true} // Para ícones decorativos
/>
```

## Acessibilidade

### Contraste

- Manter uma relação de contraste de pelo menos 4.5:1 para texto normal e 3:1 para texto grande
- Usar a ferramenta [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) para verificar

### Atributos ARIA

- Usar `aria-label` em botões que não têm texto descritivo
- Usar `aria-hidden="true"` em ícones decorativos
- Usar `role="alert"` e `aria-live="polite"` em mensagens de notificação

### Navegação por Teclado

- Garantir que todos os elementos interativos sejam acessíveis via teclado
- Manter uma ordem de tabulação lógica

## Convenções de Código

### Nomenclatura

- **Componentes**: PascalCase (ex: `EventCard`)
- **Funções**: camelCase (ex: `formatDateRange`)
- **Variáveis**: camelCase (ex: `hasEvents`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `MAX_EVENTS`)

### Estrutura de Arquivos

- **Componentes**: Organizados por tipo em `/components`
- **Utilitários**: Organizados em `/lib/helpers`
- **Serviços**: Organizados em `/lib/services`
- **Hooks**: Organizados em `/lib/hooks`

### Importações

- Usar importações nomeadas quando possível
- Agrupar importações por origem (React, Next.js, componentes internos, etc.)
- Usar barrel files (index.ts) para simplificar importações

## SEO

### Metadados

- Sempre incluir title, description e keywords relevantes
- Usar OpenGraph e Twitter Cards para compartilhamento em redes sociais
- Incluir metadados estruturados (Schema.org) quando aplicável

### Semântica HTML

- Usar tags semânticas apropriadas (section, article, nav, etc.)
- Estruturar conteúdo com headings em ordem hierárquica (h1, h2, h3, etc.)
- Usar elementos time com atributo datetime para datas
