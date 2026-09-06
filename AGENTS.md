# AGENTS.md — K7 Sites

Este arquivo define as regras permanentes para qualquer agente de código que trabalhe neste repositório. Leia-o antes de analisar, planejar ou alterar o projeto.

## 1. Objetivo do projeto

- Este é o site comercial oficial da K7 Sites.
- O objetivo principal é apresentar os serviços, fortalecer a marca e gerar pedidos de orçamento pelo WhatsApp.
- O site deve transmitir tecnologia, confiança, clareza, velocidade e acabamento premium.
- O público inclui profissionais, prestadores de serviço, pequenas empresas, negócios locais e produtores de cursos.
- Idioma padrão da interface e da comunicação: português do Brasil.

## 2. Regras inegociáveis

- Preserve a identidade visual da K7 Sites em toda alteração.
- Não altere textos, preços, métricas, avaliações, contatos, links, imagens ou comportamento fora do escopo solicitado.
- Não crie novas rotas, páginas, integrações, dependências ou serviços sem solicitação explícita.
- Não invente clientes, avaliações, números, resultados, selos, certificações, endereços ou funcionalidades.
- Não substitua a logo original por uma logo recriada, genérica ou gerada por IA.
- Não simplifique ou remova animações, responsividade, acessibilidade ou SEO para concluir uma tarefa mais rapidamente.
- Não publique, altere DNS, conecte domínio, envie dados externos, faça commit, push ou deploy sem autorização explícita.
- Preserve alterações existentes do usuário. Nunca descarte mudanças locais para facilitar uma implementação.

## 3. Arquitetura atual

- Framework: Next.js 16 com App Router.
- Interface: React 19.
- Linguagem: TypeScript em modo estrito.
- Estilos: CSS personalizado e Tailwind CSS 4 via PostCSS.
- Gerenciador de pacotes: pnpm.
- Runtime de produção: Node.js 22.x.
- Hospedagem oficial: Vercel.
- Domínio canônico: `https://www.k7sites.com.br`.
- O domínio `https://k7sites.com.br` redireciona permanentemente para o domínio com `www`.
- Rotas públicas atuais: `/` e `/criacao-de-landing-pages/`.
- Na homepage, os itens `#servicos`, `#projetos`, `#processo`, `#sobre`, `#depoimentos`, `#investimento`, `#faq` e `#orcamento` são âncoras, não rotas.

### Arquivos principais

- `app/page.tsx`: conteúdo, dados, seções e interações da homepage.
- `app/layout.tsx`: estrutura global, fontes, favicon, metadados, JSON-LD e GTM.
- `app/globals.css`: identidade visual, layout, responsividade e animações.
- `app/criacao-de-landing-pages/`: rota específica de criação de landing pages.
- `components/site-preloader.tsx`: preloader do site.
- `components/ui/image-stream.tsx`: carrossel animado de nichos.
- `components/ui/home-projects-gallery.tsx`: galeria principal da homepage.
- `lib/analytics.ts`: eventos enviados para `dataLayer`.
- `app/robots.ts`: geração de `robots.txt`.
- `app/sitemap.ts`: geração de `sitemap.xml`.
- `public/`: logo, imagens, mockups, ícones, favicon e imagem social.
- `vercel.json`: identificação do projeto como Next.js na Vercel.
- `ARQUITETURA.md`: visão técnica da arquitetura ativa.
- `INFORMACOES-COMPLETAS-DO-PROJETO.md`: documentação funcional do site.

## 4. Estrutura legada

- As pastas `db/`, `drizzle/`, `.openai/`, `examples/` e dependências relacionadas a Vite/Vinext/Cloudflare são herança da estrutura inicial.
- Elas não fazem parte da execução principal do Next.js na Vercel.
- Não conecte esses itens ao site nem os use em funcionalidades novas sem uma decisão explícita de reaproveitamento ou migração.
- Uma limpeza dessas dependências deve atualizar `package.json` e `pnpm-lock.yaml` juntos e ser validada com `pnpm check`.
- Não volte os scripts `dev`, `build` ou `start` para Vinext, Vite, Wrangler ou Cloudflare.
- A presença de dependências legadas não autoriza seu uso em funcionalidades novas.

## 5. Identidade visual da K7 Sites

### Cores oficiais

- Azul metálico principal: `#1565FF`.
- Azul escuro: `#07379B`.
- Azul-ciano de iluminação: `#00A8FF`.
- Prata: `#D9DDE3`.
- Cinza: `#9CA1A8`.
- Grafite: `#34363A`.
- Preto: `#08090B`.
- Branco gelo: `#F5F7FA`.
- Branco: `#FFFFFF`.

### Tipografia

- Manrope para textos, navegação, botões, formulários e interface.
- Sora para títulos e destaques.
- Use `next/font` e preserve as variáveis tipográficas atuais.
- Não introduza uma terceira família tipográfica sem aprovação.

### Logo e elementos de marca

- Logo oficial: `public/k7-logo.png`.
- Favicon e atalhos devem continuar usando a marca K7.
- A logo em header, cards e footer deve manter apresentação circular quando esse for o padrão do componente.
- Preserve o contraste, a proporção e a legibilidade da logo.
- Não estique, recorte, redesenhe ou altere as cores da logo.

### Direção de design

- Estética premium, tecnológica e limpa.
- Base escura com azul metálico, prata, branco e luzes azuis.
- Bordas finas, brilhos controlados, profundidade e cartões bem definidos.
- Evite aparência genérica de template, excesso de cores, sombras pesadas ou elementos infantis.
- Mantenha os títulos das seções centralizados quando esse for o padrão existente.
- A hero é a principal exceção: o texto deve permanecer alinhado à esquerda.
- Preserve o equilíbrio visual, os espaços em branco e a hierarquia tipográfica.
- Toda nova seção deve parecer parte do mesmo sistema visual.

## 6. Conteúdo e dados comerciais aprovados

- WhatsApp: `(11) 94921-4071`.
- Link base do WhatsApp: `https://wa.me/5511949214071`.
- E-mail: `k7sites@gmail.com`.
- Avaliações do Google: `https://share.google/pDIhvdTpTxOyWEIOe`.
- Landing page: a partir de `R$ 399,00`.
- Site institucional: a partir de `R$ 699,00`.
- Projeto sob medida: orçamento após avaliação.
- Condição padrão sugerida: 50% antes do início e 50% na conclusão.
- Oferta atual da hero: site ou landing page em até 48 horas, a partir de R$ 399,00.
- Indicadores atuais: 200+ sites, 40+ nichos, 48h de entrega ágil e 100% responsivo e rápido.

### Regras de conteúdo

- Não altere os dados acima sem solicitação explícita.
- Não aumente métricas nem transforme estimativas em garantias.
- Se um novo texto fizer uma promessa comercial, confirme que ela é verdadeira e sustentável.
- Mantenha preços acompanhados de “a partir de” quando o valor variar conforme o escopo.
- Preserve a informação de que o projeto pode ficar pronto antes do prazo, sem transformar isso em garantia.
- Escreva textos claros, diretos, profissionais e compreensíveis para pessoas não técnicas.
- Evite jargão, superlativos vazios e promessas impossíveis de comprovar.

## 7. Portfólio e avaliações

- Preserve a avaliação, autoria e texto dos depoimentos reais; não crie depoimentos fictícios.
- Os nomes dos avaliadores devem continuar apontando para o perfil público de avaliações da K7 Sites.
- Preserve as cinco estrelas amarelas e a identificação de avaliação do Google.
- Os mockups de nichos podem ser demonstrativos, mas devem ser visualmente completos, legíveis e coerentes com cada segmento.
- Não use campos borrados, textos aleatórios ou marcas de terceiros sem autorização.
- Mantenha o aviso de que, exceto a barbearia já existente, nomes, endereços, registros, preços e demais dados dos mockups são fictícios.
- Não apresente um mockup fictício como cliente real.

## 8. Conversão e navegação

- Os principais CTAs devem levar ao WhatsApp oficial com mensagem identificando que o contato veio pelo site.
- Preserve `target="_blank"` e `rel="noreferrer"` nos links externos quando aplicável.
- Não crie links vazios, botões sem ação ou rotas inexistentes.
- O header, menu móvel, cards de preço, cards de conversão, botão flutuante, CTA final e footer devem continuar funcionais.
- A navegação interna deve usar âncoras da rota `/` e respeitar o deslocamento do header.
- O botão flutuante do WhatsApp deve manter o ícone oficial, boa visibilidade e animação sem bloquear conteúdo.

## 9. Formulário e tratamento de dados

- O formulário atual possui três etapas e valida os campos apenas no navegador.
- Atualmente ele não envia e-mail, não grava dados, não usa banco e não possui CRM.
- Não afirme que os dados foram enviados ou salvos enquanto não existir uma integração real.
- Não adicione coleta silenciosa de dados.
- Antes de integrar formulário, e-mail, CRM, analytics, pixel ou banco de dados, confirme o serviço escolhido e o destino dos dados.
- Nunca exponha tokens, chaves, senhas, webhooks privados ou credenciais no código do navegador.
- Segredos devem ficar em variáveis de ambiente da Vercel e nunca no Git.
- Toda entrada recebida por servidor deve ser validada e normalizada no servidor.
- Em endpoints públicos, considere limite de requisições, proteção contra spam, mensagens de erro seguras e coleta mínima de dados.
- Se houver armazenamento ou rastreamento, documente a finalidade e avalie a necessidade de política de privacidade e consentimento.

## 10. Segurança

- Nunca commite `.env`, `.env.local`, credenciais, arquivos de chave ou tokens.
- Não use `dangerouslySetInnerHTML` com conteúdo externo ou enviado por usuário.
- Não execute código, HTML ou URLs recebidos de formulário sem validação.
- Não adicione scripts externos, pixels, widgets, chatbots ou bibliotecas sem solicitação e análise de impacto.
- Prefira dependências oficiais, mantidas e estritamente necessárias.
- Antes de instalar uma dependência de produção, explique por que ela é necessária e obtenha aprovação.
- Não desative TypeScript, ESLint, validações, avisos de segurança ou verificações de build para mascarar erros.
- Links externos abertos em nova aba devem usar proteção contra acesso ao contexto da página.
- Não exponha dados pessoais além dos contatos comerciais aprovados neste documento.
- Mudanças de DNS, domínio, GitHub, Vercel e acesso público exigem autorização explícita.

## 11. Imagens e desempenho

- Use `next/image` para imagens de conteúdo sempre que possível.
- Preserve proporções e forneça `sizes` coerente com o layout.
- Imagens novas devem ter resolução adequada e ser comprimidas antes de entrar em `public/`.
- Prefira WebP ou AVIF para fotografias quando não houver motivo para manter PNG/JPEG.
- Não aumente desnecessariamente o peso total do site.
- Toda imagem informativa deve ter texto alternativo útil; imagens decorativas devem usar `alt=""`.
- Preserve `public/og.png` enquanto a marca e a mensagem social não mudarem.
- Não gere ou substitua imagens da marca sem pedido explícito.
- Evite layouts que causem deslocamento durante o carregamento.

## 12. Animações e acessibilidade

- Preserve o comportamento responsivo em desktop, tablet e celular.
- Breakpoints de referência existentes: 1040 px, 860 px e 620 px.
- Mantenha suporte a teclado, foco visível, labels de formulário, ARIA e link “Ir para o conteúdo”.
- Preserve o suporte a `prefers-reduced-motion`.
- Animações devem usar preferencialmente `transform` e `opacity`.
- Não crie animações que prejudiquem leitura, interação, desempenho ou acessibilidade.
- Não deixe elementos animados bloquearem cliques ou cobrirem conteúdo principal.
- Contadores devem terminar no valor correto e ter rótulo acessível.

## 13. SEO e compartilhamento

- Preserve o idioma `pt-BR`.
- Preserve título, descrição, favicon, Open Graph e Twitter/X, atualizando-os somente quando a mudança de conteúdo justificar.
- Use o domínio confiável `https://www.k7sites.com.br` para URLs absolutas e metadados canônicos.
- Nunca derive a origem de cabeçalhos não confiáveis.
- Preserve `public/og.png` ou substitua apenas por uma imagem social validada no formato 1200 × 630.
- Mantenha uma hierarquia lógica de títulos: um `h1` principal e seções com `h2`/`h3` coerentes.
- Não crie páginas duplicadas ou rotas apenas para palavras-chave.
- Conteúdo SEO deve ser útil, verdadeiro e consistente com os serviços realmente oferecidos.

## 14. Dependências e comandos

- Use pnpm; não gere `package-lock.json` ou `yarn.lock`.
- Não troque o gerenciador de pacotes.
- Não atualize versões em massa sem uma tarefa específica.
- Ao alterar dependências, atualize `package.json` e `pnpm-lock.yaml` juntos.
- Comandos padrão:

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm start
pnpm check
```

- `pnpm check` executa lint, verificação de tipos e build em sequência.
- Não configure uma pasta de saída manual na Vercel para este projeto Next.js.
- Não altere Node.js 22.x sem verificar compatibilidade com Next.js e Vercel.

## 15. Fluxo de trabalho

Antes de alterar:

1. Leia este arquivo, `ARQUITETURA.md` e `INFORMACOES-COMPLETAS-DO-PROJETO.md`.
2. Inspecione `git status` e preserve mudanças do usuário.
3. Localize a fonte real do comportamento antes de editar.
4. Confirme se a solicitação altera design, dados comerciais, integração, segurança ou hospedagem.
5. Faça a menor alteração capaz de atender ao pedido.

Durante a alteração:

- Prefira patches pequenos, claros e reversíveis.
- Reutilize componentes, classes, variáveis CSS, imagens e padrões existentes.
- Evite refatorações não solicitadas.
- Não formate ou reescreva arquivos inteiros sem necessidade.
- Não deixe código temporário, logs de depuração, textos genéricos ou arquivos sem uso.

Depois da alteração:

1. Revise o diff.
2. Verifique links, textos, valores, responsividade e acessibilidade afetados.
3. Execute `pnpm check` para mudanças funcionais ou antes de publicar.
4. Confirme que `/` e `/criacao-de-landing-pages/` continuam funcionando e que nenhuma rota foi criada por acidente.
5. Informe ao usuário quais arquivos foram alterados e como validar.

## 16. Git, GitHub e Vercel

- Branch de produção esperada: `main`.
- Commits devem ser pequenos e ter mensagens que descrevam o resultado.
- Nunca use `git reset --hard`, force push ou descarte alterações sem autorização explícita.
- Não inclua `node_modules`, `.next`, `dist`, caches, arquivos temporários ou credenciais no Git.
- Não faça commit ou push automaticamente; faça somente quando o usuário pedir.
- O repositório GitHub está conectado à Vercel; push na branch de produção pode iniciar publicação automática.
- Não altere o projeto, time, domínio, variáveis ou configurações da Vercel sem autorização.
- Após um deploy, valide o domínio oficial com HTTPS e preserve o redirecionamento de `k7sites.com.br` para `www.k7sites.com.br`.

## 17. Regras de revisão de código

Ao revisar mudanças, trate como problema qualquer alteração que:

- quebre a identidade visual ou use cores fora da paleta sem justificativa;
- altere contatos, preços, avaliações, métricas ou promessas sem autorização;
- crie rota, dependência, serviço externo ou coleta de dados não solicitada;
- exponha segredo ou dado pessoal;
- transforme mockup fictício em caso real;
- faça o formulário parecer integrado quando ele não está;
- remova labels, ARIA, foco, navegação por teclado ou redução de movimento;
- adicione imagem pesada sem otimização;
- crie link quebrado ou CTA sem destino;
- faça o build depender de Vinext, Vite, Wrangler ou Cloudflare;
- altere ou remova o domínio oficial, SEO ou imagem social sem necessidade;
- ignore erro de lint, TypeScript ou build;
- modifique arquivos fora do escopo.

## 18. Definição de concluído

Uma tarefa só está concluída quando:

- o pedido foi atendido sem mudanças paralelas;
- o design continua coerente com a K7 Sites;
- os dados comerciais permanecem corretos;
- a experiência funciona em desktop e mobile;
- segurança e acessibilidade não regrediram;
- lint, typecheck e build relevantes passaram;
- não surgiram novas rotas ou dependências por acidente;
- o diff foi revisado;
- o usuário recebeu um resumo claro em português.

Em caso de conflito entre uma solicitação nova e estas regras, explique o impacto antes de executar mudanças que possam afetar marca, segurança, dados, domínio ou publicação.
