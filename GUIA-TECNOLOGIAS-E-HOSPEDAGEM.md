# K7 Sites — tecnologias e hospedagem

## Stack principal

O site oficial roda atualmente como uma aplicação **Next.js padrão na Vercel**.

- Next.js 16 com App Router
- React 19
- TypeScript
- CSS responsivo personalizado
- Tailwind CSS 4 disponível via PostCSS
- `next/image` para imagens
- `next/font` para Manrope e Sora
- ESLint para qualidade do código
- Node.js 22.x
- pnpm
- Vercel

O projeto não depende de WordPress, Elementor, Bootstrap ou jQuery.

Algumas dependências e arquivos de Vinext, Vite, Cloudflare Workers, Wrangler, OpenAI Sites e Drizzle permanecem no repositório por histórico/compatibilidade, mas não fazem parte do runtime principal da aplicação publicada.

## Executar localmente

1. Instale Node.js 22.x.
2. Instale o pnpm.
3. Na raiz do projeto, execute:

```bash
pnpm install
pnpm dev
```

4. Abra `http://localhost:3000`.

## Validação

Antes de enviar uma alteração para produção:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Ou:

```bash
pnpm check
```

## Variáveis de ambiente

A única variável atualmente documentada é opcional:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
```

Ela habilita o Google Tag Manager. O site funciona sem essa variável.

## Hospedagem na Vercel

O arquivo `vercel.json` identifica o projeto como Next.js. A Vercel deve usar a detecção padrão do framework.

Configuração esperada:

- Framework: Next.js
- Runtime: Node.js 22.x
- Build command: `pnpm build` ou detecção automática
- Output directory: padrão do Next.js
- Install command: detecção automática do pnpm

Não configure saída estática manual nem troque os scripts principais para Vinext, Vite, Wrangler ou Cloudflare sem uma migração planejada.

## Domínio

Domínio canônico:

`https://www.k7sites.com.br`

O domínio sem `www` deve redirecionar permanentemente para o domínio canônico.

## Rotas públicas

- `/` — homepage comercial
- `/criacao-de-landing-pages/` — página específica para o serviço de criação de landing pages

Na homepage, os links com `#` são âncoras da mesma página, por exemplo `/#projetos`, `/#depoimentos` e `/#orcamento`.

## SEO técnico

O Next.js gera os recursos de SEO a partir de:

- `app/layout.tsx` — metadata global, Open Graph, Twitter/X e JSON-LD
- `app/robots.ts` — `robots.txt`
- `app/sitemap.ts` — `sitemap.xml`
- `app/criacao-de-landing-pages/page.tsx` — metadata e JSON-LD da rota de landing pages

## Publicação

Fluxo recomendado:

1. criar uma branch para a alteração;
2. implementar e revisar o escopo;
3. executar `pnpm check`;
4. abrir Pull Request para `main`;
5. revisar o preview da Vercel;
6. fazer merge somente após aprovação.

A publicação e alterações de domínio/DNS devem ser feitas apenas com autorização explícita.
