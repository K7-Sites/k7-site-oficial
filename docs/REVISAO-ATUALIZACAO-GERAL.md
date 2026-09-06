# Revisão da atualização geral

Branch: `chore/atualizacao-geral`

## Alterações realizadas

- documentação técnica atualizada;
- arquitetura atual consolidada em `ARQUITETURA.md`;
- manutenção documentada em `MAINTENANCE.md`;
- changelog criado;
- scripts `typecheck` e `check` adicionados;
- variável de ambiente documentada alinhada ao GTM ativo;
- headers básicos de segurança adicionados ao Next.js;
- rota `/criacao-de-landing-pages/` incorporada à documentação oficial.

## Validação necessária antes do merge

Em um ambiente com Node.js 22.x e pnpm:

```bash
pnpm install --frozen-lockfile
pnpm check
```

Depois, validar no preview da Vercel:

- `/`;
- `/criacao-de-landing-pages/`;
- menu mobile;
- WhatsApp;
- formulário;
- galerias;
- metadata/SEO;
- console do navegador.

## Limpeza legada

A remoção das dependências legadas foi deliberadamente separada desta atualização para evitar alterações em `package.json` sem regenerar `pnpm-lock.yaml`. Ela pode ser realizada depois em uma branch própria com validação completa.
