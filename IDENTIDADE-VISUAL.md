# Identidade visual oficial — K7 Sites

Este documento registra a identidade visual oficial do site principal da **K7 Sites** e deve ser tratado como referência de manutenção para futuras alterações.

## Fonte de verdade

A identidade visual oficial é a apresentada atualmente na página principal `/`, restaurada para o estado visual anterior aos experimentos mais recentes de CRO e redesign.

Arquivos de referência:

- `app/page.tsx`
- `app/globals.css`
- `components/ui/home-projects-gallery.tsx`

A página `/criacao-de-landing-pages` pode manter linguagem visual própria para campanha e conversão, desde que preserve a marca K7, o formulário, os eventos, o rastreamento e a integração com o K7 Gestão.

## Paleta oficial

Variáveis principais definidas em `app/globals.css`:

- Azul principal: `#1565FF`
- Azul escuro: `#07379B`
- Azul-ciano: `#00A8FF`
- Prata: `#D9DDE3`
- Cinza: `#9CA1A8`
- Grafite: `#34363A`
- Preto / fundo principal: `#08090B`
- Branco gelo: `#F5F7FA`
- Branco: `#FFFFFF`

## Direção visual

A página principal deve manter:

- base escura em preto/grafite;
- azul metálico como cor primária;
- azul-ciano usado como luz, brilho e reforço visual;
- cards e superfícies com contraste forte e acabamento limpo;
- bordas discretas e transparências controladas;
- brilho azul utilizado com moderação;
- visual tecnológico, premium e profissional;
- espaçamento amplo e hierarquia clara.

## Tipografia

- Títulos: Sora
- Texto corrido e interface: Manrope

Evitar substituir essas famílias sem decisão explícita de identidade.

## Layout

- Container principal padrão: `1180px`
- Respiro lateral padrão em desktop: `24px` por lado por meio de `calc(100% - 48px)`
- Seções principais com espaçamento vertical generoso
- Layout responsivo obrigatório
- Mobile deve manter leitura, contraste e CTAs acessíveis sem quebra de composição

## Componentes e comportamento

Preservar como parte da identidade:

- preloader da K7;
- header escuro/tecnológico;
- logo oficial;
- botões com acabamento azul;
- microinterações discretas;
- reveal on scroll;
- barras e detalhes em gradiente azul/ciano;
- mockups responsivos;
- cards de serviços e projetos;
- seções de prova social;
- formulário comercial integrado.

## Formulários, campanhas e mensuração

Alterações visuais nunca devem quebrar:

- captura e retenção de UTMs;
- origem do lead;
- serviço selecionado;
- `service_id`;
- `submission_id`;
- proteção contra duplicidade;
- endpoint `/api/leads`;
- endpoint `/api/leads/criacao-lp`;
- integração com K7 Gestão;
- Google Analytics / GA4;
- Google Ads;
- eventos de conversão existentes.

O estado de referência para rastreamento de campanhas foi consolidado a partir do commit `884f77a`, mantendo a aparência oficial da Home e a atribuição de campanhas.

## Exceção — página de criação de landing pages

A rota `/criacao-de-landing-pages` possui identidade de campanha própria, com:

- azul-petróleo/grafite;
- off-white;
- coral como cor secundária;
- animações e mockups comerciais;
- CTAs focados em conversão.

Essa rota pode manter esse visual separado da Home, porém a **identidade principal da K7 Sites continua sendo a Home** descrita neste documento.

## Regra de manutenção

Antes de qualquer redesign da página principal:

1. comparar com este documento;
2. preservar paleta, tipografia e linguagem visual;
3. não trocar o tema principal sem aprovação explícita;
4. preservar formulário, rastreamento, eventos e integração com CRM;
5. validar desktop, mobile, SEO, Analytics, Google Ads, formulário e build.
