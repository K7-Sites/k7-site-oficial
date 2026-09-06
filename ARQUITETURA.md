# Arquitetura — K7 Sites

Este documento descreve a arquitetura **ativa** do site oficial da K7 Sites.

## Visão geral

O projeto usa **Next.js 16 com App Router**, React 19 e TypeScript. A aplicação é publicada na Vercel e utiliza o domínio canônico `https://www.k7sites.com.br`.

A arquitetura principal é:

```text
Navegador
   ↓
Next.js App Router
   ├── app/layout.tsx
   ├── app/page.tsx
   ├── app/criacao-de-landing-pages/
   ├── app/robots.ts
   └── app/sitemap.ts
          ↓
components/
   ├── site-preloader.tsx
   └── ui/
          ↓
public/ + app/globals.css
          ↓
Vercel
```

## Rotas

### `/`

Homepage comercial da K7 Sites.

Responsabilidades principais:

- apresentação da marca;
- serviços;
- processo;
- portfólio;
- avaliações;
- investimento;
- FAQ;
- formulário de orçamento;
- CTAs para WhatsApp.

O arquivo central é `app/page.tsx`.

### `/criacao-de-landing-pages/`

Página específica para aquisição orgânica e apresentação do serviço de criação de landing pages.

Arquivos:

```text
app/criacao-de-landing-pages/
├── page.tsx
├── landing-pages.tsx
└── landing-pages.css
```

`page.tsx` concentra metadata e dados estruturados; `landing-pages.tsx` concentra a interface; `landing-pages.css` contém os estilos específicos dessa rota.

## Layout global

`app/layout.tsx` é responsável por:

- idioma `pt-BR`;
- fontes Manrope e Sora via `next/font`;
- metadata global;
- canonical;
- Open Graph;
- Twitter/X Card;
- favicon;
- JSON-LD;
- Google Tag Manager opcional.

## Homepage

`app/page.tsx` é um Client Component porque a homepage possui interações com estado e efeitos no navegador.

Ele contém atualmente:

- dados comerciais;
- arrays de serviços, benefícios, projetos, depoimentos e FAQ;
- navegação e menu mobile;
- animações e observadores de interseção;
- sliders e galerias;
- formulário em três etapas;
- eventos de analytics;
- CTAs de WhatsApp.

Como o arquivo é grande, novas funcionalidades reutilizáveis devem preferencialmente ser extraídas para `components/` quando isso reduzir complexidade sem alterar o comportamento atual.

## Componentes

### `components/site-preloader.tsx`

Responsável pela experiência de carregamento inicial da aplicação.

### `components/ui/image-stream.tsx`

Componente visual para fluxo/carrossel de imagens de nichos.

### `components/ui/home-projects-gallery.tsx`

Galeria principal de projetos apresentada na homepage.

### `components/ui/project-gallery.tsx`

Componente auxiliar de galeria de projetos.

## Estilos

### `app/globals.css`

Folha global principal. Concentra:

- tokens visuais;
- layout;
- header e navegação;
- hero;
- seções comerciais;
- formulário;
- responsividade;
- animações;
- acessibilidade visual;
- `prefers-reduced-motion`.

### CSS específico de rota

`app/criacao-de-landing-pages/landing-pages.css` contém estilos exclusivos da página de criação de landing pages.

## Assets

`public/` concentra arquivos estáticos, incluindo:

- logo oficial;
- imagem social `og.png`;
- mockups;
- imagens de portfólio;
- imagens do carrossel de nichos;
- ícones e logos de tecnologias.

Imagens de conteúdo devem usar `next/image` sempre que possível.

## Analytics

`lib/analytics.ts` envia eventos para `window.dataLayer`.

O Google Tag Manager é carregado somente quando `NEXT_PUBLIC_GTM_ID` está definido.

Fluxo:

```text
Interação do usuário
   ↓
trackEvent(...)
   ↓
window.dataLayer
   ↓
Google Tag Manager (quando configurado)
```

## Formulário

O formulário da homepage é atualmente client-side.

Fluxo atual:

```text
Usuário preenche formulário
   ↓
Validação no navegador
   ↓
Resumo/mensagem
   ↓
WhatsApp
```

Não existe persistência ativa em banco, CRM ou envio de e-mail.

## SEO

### Global

`app/layout.tsx` define metadata e JSON-LD globais.

### Rota de landing pages

`app/criacao-de-landing-pages/page.tsx` possui metadata, `Service` e `FAQPage` próprios.

### Rastreamento

- `app/robots.ts` gera `/robots.txt`;
- `app/sitemap.ts` gera `/sitemap.xml` e lista as rotas públicas.

## Estrutura legada

O repositório nasceu em uma base compatível com Vinext/OpenAI Sites e conserva dependências e arquivos relacionados a Vite, Cloudflare, Wrangler e Drizzle.

Esses itens **não fazem parte do runtime principal na Vercel**. Enquanto permanecerem no repositório, não devem ser usados por funcionalidades novas sem uma decisão explícita de migração ou reaproveitamento.

A limpeza dessas dependências deve ser feita em uma alteração dedicada, acompanhada da regeneração do `pnpm-lock.yaml` e execução de `pnpm check`.

## Qualidade

Comandos principais:

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm check
```

`pnpm check` executa lint, verificação de tipos e build em sequência.

## Princípios de manutenção

- preservar a identidade visual;
- manter SEO, acessibilidade e responsividade;
- evitar alterações fora do escopo;
- não introduzir dependências sem necessidade;
- preferir componentes reutilizáveis para novas funcionalidades complexas;
- manter dados comerciais centralizados e consistentes;
- validar mudanças com `pnpm check` antes de produção;
- publicar somente após revisão e aprovação.
