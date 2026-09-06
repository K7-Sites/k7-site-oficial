# Changelog

## Atualização geral — 2026-09-06

- documentação principal atualizada para a arquitetura Next.js/Vercel atual;
- rota `/criacao-de-landing-pages/` documentada em todos os guias principais;
- novo `ARQUITETURA.md` com visão técnica do projeto;
- comandos `typecheck` e `check` adicionados ao `package.json`;
- `.env.example` alinhado ao Google Tag Manager realmente utilizado;
- headers básicos de segurança adicionados ao `next.config.ts`;
- estrutura legada identificada como não pertencente ao runtime principal;
- fluxo recomendado de branch, validação, Pull Request e preview da Vercel documentado.

### Observação sobre dependências legadas

Dependências e arquivos herdados de Vinext, Vite, Cloudflare, Wrangler, OpenAI Sites e Drizzle não foram removidos nesta atualização porque uma remoção segura exige regenerar `pnpm-lock.yaml` e executar a suíte `pnpm check` em um ambiente com Node.js/pnpm. A limpeza deve ser feita em uma alteração dedicada para não deixar o lockfile inconsistente.
