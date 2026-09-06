# K7 Sites — site oficial

Site comercial oficial da **K7 Sites**, desenvolvido para apresentar serviços, portfólio e diferenciais da marca e converter visitantes em pedidos de orçamento pelo WhatsApp.

## Stack atual

- Next.js 16 com App Router
- React 19
- TypeScript
- CSS personalizado
- Tailwind CSS 4 disponível via PostCSS
- `next/image` e `next/font`
- ESLint 9
- Node.js 22.x
- pnpm
- Vercel

A aplicação principal roda em **Next.js padrão na Vercel**. O repositório ainda contém algumas dependências e arquivos herdados da fase inicial com Vinext/OpenAI Sites, mas eles não fazem parte da execução principal.

## Rotas públicas

- `/` — página comercial principal
- `/criacao-de-landing-pages/` — página específica de serviço e SEO para criação de landing pages

As seções da homepage usam âncoras como `#servicos`, `#projetos`, `#processo`, `#sobre`, `#depoimentos`, `#investimento`, `#faq` e `#orcamento`.

## Rodar localmente

Requisitos:

- Node.js 22.x
- pnpm

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## Validação antes de publicar

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Ou execute tudo em sequência:

```bash
pnpm check
```

## Arquivos principais

- `app/page.tsx` — homepage, conteúdo comercial e interações principais
- `app/layout.tsx` — metadata global, fontes, JSON-LD e Google Tag Manager
- `app/globals.css` — identidade visual, responsividade e animações globais
- `app/criacao-de-landing-pages/` — rota específica de landing pages
- `components/site-preloader.tsx` — preloader do site
- `components/ui/` — galerias e componentes visuais reutilizados
- `lib/analytics.ts` — envio de eventos para `dataLayer`
- `app/robots.ts` — regras de rastreamento
- `app/sitemap.ts` — sitemap das rotas públicas
- `public/` — logo, imagens, mockups, ícones e imagem social
- `vercel.json` — identificação do projeto como Next.js na Vercel

Leia também `ARQUITETURA.md` para a visão técnica do projeto e `AGENTS.md` para as regras permanentes de manutenção.

## SEO e analytics

O projeto possui:

- metadata do Next.js
- canonical
- Open Graph
- Twitter/X Card
- JSON-LD para `WebSite`, `Organization`, `Service` e `FAQPage`
- `robots.txt` gerado por `app/robots.ts`
- `sitemap.xml` gerado por `app/sitemap.ts`
- Google Tag Manager opcional via `NEXT_PUBLIC_GTM_ID`

Copie `.env.example` para `.env.local` quando precisar configurar o GTM localmente.

## Formulário de orçamento

O formulário da homepage possui três etapas e valida os dados no navegador. Atualmente ele **não grava dados em banco, não envia e-mail e não usa CRM**. Ao concluir, o visitante é direcionado para continuar o atendimento pelo WhatsApp.

## Publicação

A hospedagem oficial é a **Vercel** e o domínio canônico é:

`https://www.k7sites.com.br`

O domínio sem `www` deve permanecer redirecionando para o domínio canônico.

Antes de qualquer publicação, execute `pnpm check` e revise SEO, links, responsividade e comportamento dos CTAs.

## Contato comercial

- WhatsApp: `(11) 94921-4071`
- E-mail: `k7sites@gmail.com`

## Documentação complementar

- `ARQUITETURA.md` — arquitetura técnica atual
- `AGENTS.md` — regras obrigatórias para alterações
- `INFORMACOES-COMPLETAS-DO-PROJETO.md` — documentação funcional e comercial
- `GUIA-TECNOLOGIAS-E-HOSPEDAGEM.md` — execução e hospedagem
- `RELATORIO-ANALISE-E-COPY.md` — histórico das decisões de conteúdo e referência visual
