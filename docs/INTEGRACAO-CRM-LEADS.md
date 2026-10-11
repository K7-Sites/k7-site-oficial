# Integração formulário Hero → K7 Gestão

O formulário da Hero envia nome, WhatsApp, serviço e um UUID por submissão para `/api/leads` no Next.js. O servidor Next.js encaminha os dados ao Laravel sem expor o token ao navegador.

## Configuração (não incluir tokens no Git)

No ambiente do **K7 Gestão (Laravel)**:
- `K7_SITE_LEAD_TOKEN`: segredo aleatório forte compartilhado apenas com a Vercel.
- Executar `php artisan config:clear` ou reconstruir cache de configuração após alterar o ambiente.
- Endpoint: `POST https://gestao.k7sites.com.br/api/site/leads`.
- O endpoint utiliza rate limit, token Bearer e UUID para proteção básica contra duplicidade (cache compartilhado com suporte a locks).

No projeto **K7 Site Oficial (Vercel)**, configurar variáveis de ambiente server-side:
- `K7_GESTAO_LEAD_TOKEN`: mesmo valor do token Laravel.
- `K7_GESTAO_LEAD_ENDPOINT`: `https://gestao.k7sites.com.br/api/site/leads`.

Não usar prefixo `NEXT_PUBLIC_` nessas variáveis.

## Fluxo
- O formulário público chama `POST /api/leads` no Next.js.
- O Next.js valida e encaminha os dados com token Bearer ao Laravel.
- O Laravel cria oportunidade em `new` (Base), origem `site`, posição zero, nome, telefone e descrição do serviço. O vínculo `service_id` só ocorre quando o serviço já existe com o mesmo nome no cadastro.
- Falhas não são apresentadas como sucesso ao visitante.

## Antes de produção
- Testar com ambiente de homologação, validar criação de uma única oportunidade, seleção do serviço, falhas e responsividade.
- Adicionar proteção antispam complementar (por exemplo, Turnstile) e rate limit na borda da Vercel, já que o rate limit Laravel enxerga o IP do servidor proxy.
- Não habilitar variáveis de produção antes de concluir os testes.
