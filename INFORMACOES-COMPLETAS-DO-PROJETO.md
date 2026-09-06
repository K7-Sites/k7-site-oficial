# K7 Sites — informações completas do projeto

## 1. Resumo

Este projeto é o site comercial da K7 Sites, criado para apresentar serviços, gerar confiança e transformar visitantes em pedidos de orçamento.

- Nome do projeto: K7 Sites Vendas
- Versão: 1.0.0
- Tipo: site institucional e comercial com páginas de aquisição
- Idioma: português do Brasil
- Rotas públicas: `/` e `/criacao-de-landing-pages/`
- Navegação da homepage: página principal com âncoras internas
- Hospedagem oficial: Vercel
- Domínio canônico: `https://www.k7sites.com.br`
- WhatsApp comercial: (11) 94921-4071
- E-mail: k7sites@gmail.com
- Perfil de avaliações: https://share.google/pDIhvdTpTxOyWEIOe

## 2. Objetivo do site

O site foi planejado para:

- apresentar os serviços da K7 Sites;
- explicar os diferenciais da empresa;
- mostrar possibilidades visuais para diferentes nichos;
- reforçar autoridade por meio de avaliações reais do Google;
- apresentar preços iniciais e condições de pagamento;
- reduzir dúvidas antes do contato;
- encaminhar os visitantes para um pedido de orçamento pelo WhatsApp;
- captar tráfego orgânico com páginas específicas de serviço.

## 3. Identidade visual

### Paleta principal

- Azul metálico K7: `#1565FF`
- Azul escuro: `#07379B`
- Azul-ciano de luz: `#00A8FF`
- Prata: `#D9DDE3`
- Cinza: `#9CA1A8`
- Grafite: `#34363A`
- Preto: `#08090B`
- Branco gelo: `#F5F7FA`
- Branco: `#FFFFFF`

### Tipografia

- Manrope: textos, navegação, botões e elementos de interface.
- Sora: títulos e elementos de maior destaque.
- As fontes são carregadas com `next/font/google` e otimizadas pelo Next.js durante a compilação.

### Direção visual

- estética premium e tecnológica;
- contraste entre preto, azul metálico, branco e prata;
- brilhos azuis, linhas finas e fundos com profundidade;
- cartões escuros com bordas e efeitos de luz;
- logotipo original da K7 Sites em formato circular;
- layout responsivo para computador, tablet e celular.

## 4. Tecnologias ativas no site

### Aplicação

- Next.js 16.2.6 com App Router.
- React 19.2.6.
- React DOM 19.2.6.
- TypeScript 5.9.3.
- Node.js 22.x.
- pnpm como gerenciador de dependências.

### Interface e estilos

- CSS responsivo personalizado.
- Tailwind CSS 4.2.1 carregado pelo PostCSS e disponível na base.
- `next/image` para otimização e dimensionamento das imagens.
- `next/font` para carregar Manrope e Sora.
- HTML semântico e atributos ARIA.
- SVG para ícones pequenos e o símbolo do WhatsApp.

### Interatividade

- React Hooks: `useState`, `useEffect` e `useRef`.
- `IntersectionObserver` para revelar seções durante a rolagem.
- animações CSS com `@keyframes`.
- rolagem suave por âncoras.
- indicador de progresso de leitura.
- contadores animados quando entram na tela.
- formulário interativo dividido em três etapas.
- galerias e sliders em componentes React.

### Qualidade e publicação

- ESLint 9 para validação do código.
- TypeScript em modo estrito.
- comando `pnpm typecheck` para verificação de tipos.
- comando `pnpm check` para lint, typecheck e build em sequência.
- `vercel.json` para detecção como projeto Next.js.
- hospedagem oficial na Vercel.
- headers básicos de segurança configurados em `next.config.ts`.
- imagens sociais Open Graph e Twitter/X.

## 5. Dependências de compatibilidade presentes no pacote

O projeto foi originalmente iniciado em uma estrutura Vinext/OpenAI Sites. Por isso, o pacote ainda conserva dependências e arquivos de referência para Vinext, Vite, Cloudflare Workers, Wrangler, OpenAI Sites e Drizzle ORM.

Esses itens não fazem parte da execução principal na Vercel. Os comandos ativos `dev`, `build` e `start` utilizam o Next.js padrão.

Uma limpeza completa dessas dependências deve ser feita em uma alteração dedicada, atualizando `package.json` e `pnpm-lock.yaml` juntos e validando o resultado com `pnpm check`.

## 6. Seções da homepage

1. Faixa animada de diferenciais.
2. Header com navegação e botão de orçamento.
3. Hero com oferta, preço inicial e mockup profissional.
4. Contadores de projetos, nichos, prazo e responsividade.
5. Carrossel animado com diferentes nichos.
6. Seção “Tudo que seu site precisa para vender”.
7. Faixa de clareza, design e estratégia.
8. Serviços oferecidos pela K7 Sites.
9. Processo de desenvolvimento em quatro etapas.
10. Portfólio demonstrativo com dez nichos.
11. Card de conversão para WhatsApp.
12. Apresentação da K7 Sites.
13. Avaliações reais do Google.
14. Planos e preços iniciais.
15. Perguntas frequentes.
16. Formulário de orçamento em três etapas.
17. Chamada final para ação.
18. Footer com navegação e contato.

## 7. Serviços apresentados

- Landing pages.
- Sites institucionais.
- Páginas de vendas.
- Sites para cursos.
- Redesign estratégico.
- Suporte e evolução do projeto.

## 8. Preços exibidos

- Landing page: a partir de R$ 399,00.
- Site institucional: a partir de R$ 699,00.
- Projeto sob medida: orçamento após avaliação.
- Condição padrão sugerida: 50% antes do início e 50% na conclusão.

Os valores são apresentados como preços iniciais. O orçamento final depende do escopo, das páginas, das funcionalidades e das integrações solicitadas.

## 9. Portfólio e nichos

O site contém apresentações visuais para:

- barbearia;
- restaurante;
- academia;
- clínica de estética;
- odontologia;
- imobiliária;
- advocacia;
- salão de beleza;
- fotografia;
- moda e e-commerce.

O carrossel de nichos também apresenta saúde, estética, advocacia, higienização, barbearia, cursos e gastronomia.

Os mockups são demonstrativos. Exceto pela barbearia já existente, nomes, endereços, registros, preços e informações utilizados nas apresentações são fictícios.

## 10. Integrações e contatos

### WhatsApp

Todos os principais botões levam para:

`https://wa.me/5511949214071`

A mensagem identifica que o visitante chegou pelo site da K7 Sites. O botão flutuante, o header, os cards de preços, as chamadas para ação e o formulário utilizam esse canal.

### Google

As avaliações exibidas apontam para o perfil público de avaliações da K7 Sites:

`https://share.google/pDIhvdTpTxOyWEIOe`

### Google Tag Manager

O GTM é opcional e é carregado quando a variável abaixo está configurada:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
```

Os eventos da interface são enviados para `window.dataLayer` por `lib/analytics.ts`.

### E-mail

O footer utiliza o endereço `k7sites@gmail.com` por meio de um link `mailto:`.

## 11. Funcionamento do formulário

O formulário possui três etapas:

1. nome, WhatsApp e e-mail;
2. tipo, objetivo e referência do projeto;
3. prazo e descrição do negócio.

Atualmente, o formulário valida os campos no navegador e, ao concluir, direciona o atendimento para o WhatsApp.

Importante: o formulário ainda não envia e-mail, não registra os dados em banco e não possui integração com CRM. Para armazenar os contatos, será necessário integrar um serviço de formulários, API, e-mail, CRM ou banco de dados.

## 12. Animações e comportamentos

- faixa superior em movimento contínuo;
- entrada animada do conteúdo da hero;
- seções reveladas durante a rolagem;
- barra superior de progresso;
- contadores numéricos animados;
- carrossel de nichos com movimento contínuo;
- órbitas e elementos flutuantes na hero;
- logotipo K7 com rotação 3D contínua;
- foguetes azuis subindo no fundo da seção de preços;
- brilho pulsante no plano em destaque;
- botão flutuante do WhatsApp com pulso e anéis;
- FAQ expansível;
- transição entre as etapas do formulário.

O projeto respeita `prefers-reduced-motion`, reduzindo animações para usuários que ativam essa preferência no dispositivo.

## 13. Responsividade e acessibilidade

- breakpoints principais em 1040 px, 860 px e 620 px;
- menu móvel com controle de abertura e fechamento;
- imagens dimensionadas para diferentes larguras;
- navegação por âncoras com compensação do header;
- link “Ir para o conteúdo” para navegação por teclado;
- textos alternativos nas imagens relevantes;
- rótulos ARIA em botões, navegação, avaliações e contadores;
- campos do formulário com labels e validação nativa.

## 14. SEO e compartilhamento

### Global

- título: “Criação de Sites e Landing Pages Profissionais | K7 Sites”;
- descrição voltada para sites institucionais, landing pages e geração de contatos;
- idioma `pt-BR`;
- canonical em `https://www.k7sites.com.br/`;
- favicon com a marca K7 Sites;
- imagem social em `public/og.png`;
- Open Graph;
- Twitter/X Card;
- JSON-LD com `WebSite`, `Organization`, `Service` e `FAQPage`.

### Rota de criação de landing pages

`/criacao-de-landing-pages/` possui metadata, canonical, Open Graph, Twitter/X, `Service` e `FAQPage` próprios.

### Rastreamento

- `app/robots.ts` gera `/robots.txt`;
- `app/sitemap.ts` gera `/sitemap.xml` e lista as duas rotas públicas atuais.

## 15. Rotas e navegação

Existem duas rotas públicas comerciais:

- `/` — página principal da K7 Sites;
- `/criacao-de-landing-pages/` — página específica do serviço de landing pages.

Os endereços `/#servicos`, `/#projetos`, `/#processo`, `/#sobre`, `/#depoimentos`, `/#investimento`, `/#faq` e `/#orcamento` são âncoras da homepage e não rotas separadas.

O Next.js também cria internamente a tela padrão de página não encontrada.

## 16. Estrutura dos arquivos principais

- `app/page.tsx`: conteúdo, dados, seções e interações da homepage.
- `app/layout.tsx`: fontes, idioma, favicon, metadados, JSON-LD e GTM.
- `app/globals.css`: identidade visual, responsividade e animações globais.
- `app/criacao-de-landing-pages/`: página específica de landing pages.
- `components/site-preloader.tsx`: preloader.
- `components/ui/image-stream.tsx`: carrossel animado de nichos.
- `components/ui/home-projects-gallery.tsx`: galeria de projetos da homepage.
- `components/ui/project-gallery.tsx`: componente auxiliar de galeria.
- `lib/analytics.ts`: integração de eventos com `dataLayer`.
- `public/`: logotipo, imagens, mockups, ícones e imagem social.
- `package.json`: versões, dependências e comandos do projeto.
- `pnpm-lock.yaml`: versões travadas das dependências.
- `next.config.ts`: imagens e headers básicos de segurança.
- `vercel.json`: identificação do framework para a Vercel.
- `tsconfig.json`: configuração do TypeScript.
- `ARQUITETURA.md`: arquitetura técnica atual.
- `GUIA-TECNOLOGIAS-E-HOSPEDAGEM.md`: guia rápido de execução e publicação.
- `INFORMACOES-COMPLETAS-DO-PROJETO.md`: documentação funcional e comercial.

## 17. Executar no computador

Pré-requisitos: Node.js 22.x e pnpm.

```bash
pnpm install
pnpm dev
```

Depois, abra `http://localhost:3000`.

## 18. Validar e gerar versão de produção

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Ou execute:

```bash
pnpm check
```

Para iniciar a build localmente após compilar:

```bash
pnpm start
```

## 19. Publicar na Vercel

Fluxo recomendado:

1. trabalhe em uma branch separada;
2. execute `pnpm check`;
3. abra Pull Request para `main`;
4. revise o preview da Vercel;
5. faça merge somente após aprovação.

A Vercel deve detectar Next.js automaticamente. Não configure pasta de saída manual.

A variável `NEXT_PUBLIC_GTM_ID` é opcional. O projeto não precisa de banco de dados para exibir o site.

## 20. Status técnico

- runtime principal: Next.js na Vercel;
- domínio canônico: `www.k7sites.com.br`;
- sitemap: inclui `/` e `/criacao-de-landing-pages/`;
- formulário: client-side com encaminhamento para WhatsApp;
- banco/CRM: não integrados;
- GTM: opcional via variável de ambiente;
- headers básicos de segurança: configurados em `next.config.ts`;
- lint, typecheck e build devem ser executados com `pnpm check` antes de produção.

Consulte também `ARQUITETURA.md` e `AGENTS.md` antes de mudanças estruturais.
