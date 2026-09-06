# Manutenção do site K7

## Checklist antes de alterar

- leia `AGENTS.md`;
- consulte `ARQUITETURA.md`;
- confirme a rota afetada;
- preserve preços, contatos, avaliações, métricas e identidade visual quando não fizerem parte do pedido;
- evite dependências novas para alterações que podem ser resolvidas com a stack existente.

## Checklist técnico

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
```

Ou:

```bash
pnpm check
```

## Checklist visual

Validar pelo menos:

- desktop;
- tablet;
- celular;
- navegação por teclado;
- menu mobile;
- CTAs de WhatsApp;
- galerias e sliders;
- formulário;
- `prefers-reduced-motion`.

## Checklist de SEO

- title e description coerentes;
- canonical correto;
- somente um `h1` principal por página;
- hierarquia de headings;
- `alt` das imagens;
- JSON-LD compatível com o conteúdo visível;
- sitemap contendo todas as rotas públicas indexáveis;
- robots sem bloquear páginas comerciais.

## Checklist de publicação

1. trabalhar em branch separada;
2. revisar diff;
3. executar `pnpm check`;
4. abrir Pull Request;
5. revisar preview da Vercel;
6. testar `/` e `/criacao-de-landing-pages/`;
7. fazer merge após aprovação;
8. validar domínio oficial após o deploy.

## Dependências legadas

A limpeza de Vinext, Vite, Cloudflare, Wrangler, OpenAI Sites e Drizzle deve ser tratada como tarefa específica. Ao removê-las:

1. confirme que não existem imports ativos;
2. remova arquivos e dependências em conjunto;
3. regenere `pnpm-lock.yaml` com pnpm;
4. execute `pnpm check`;
5. revise o preview antes do merge.
