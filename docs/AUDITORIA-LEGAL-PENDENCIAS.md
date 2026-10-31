# Auditoria jurídica e técnica — 31/10/2026

## A confirmar antes da publicação
- [RAZÃO SOCIAL OU NOME CIVIL] e [CNPJ OU IDENTIFICAÇÃO CADASTRAL APLICÁVEL].
- [ENDEREÇO COMPLETO] de atendimento ao consumidor.
- [NOME DO ENCARREGADO OU JUSTIFICATIVA DE DISPENSA] e contato de privacidade.
- [CONFIRMAR OPERADORES, TRANSFERÊNCIAS INTERNACIONAIS E LOCALIZAÇÃO DOS DADOS]: CRM K7 Gestão, hospedagem, Google Analytics e eventuais serviços externos.
- [PRAZOS DE RETENÇÃO, EXCLUSÃO E MEDIDAS DE SEGURANÇA A CONFIRMAR].
- [CONDIÇÕES DE PAGAMENTO E FATURAMENTO A CONFIRMAR].
- [DEFINIR CESSÃO DE DIREITOS, ENTREGA DO CÓDIGO E LICENÇAS DO PROJETO].
- [PRAZO DE RESPOSTA, PROCESSO DE ESTORNO E CANAL ALTERNATIVO A CONFIRMAR].

## Rastreamento identificado no código
- Google Analytics 4: G-2PK8GHK05G (gtag.js); agora condicionado a aceite.
- Eventos enviados pela função lib/analytics.ts: cliques, formulário e seleção de serviço; não são enviados sem gtag consentido.
- UTMs são guardadas em sessionStorage para atribuição dos leads; verificar transparência, necessidade e retenção.
- Links externos para WhatsApp e Google Reviews: terceiros podem tratar dados após navegação externa.
- Não foi identificado Pixel da Meta no código inspecionado. Verificar também injeções via painel Vercel, tags externas e scripts adicionados fora do repositório.

## Direitos autorais — evidências ainda ausentes
- public/hero-k7-sites*.png, public/og.png e public/landing-page-profissional-auto-desenpenho.webp.
- public/niche-premium/*, public/project-stream/* e public/projetos-k7/*: confirmar autoria, licenças e autorização de uso de marcas e capturas de terceiros.
- public/kassio-kennedy/*: confirmar autorização de imagem.
- public/technologies/*.svg, public/whatsapp.svg, logos e ícones: conferir condições de marca e licença.
- Fontes Manrope e Sora carregadas via next/font/google: manter avisos de licença OFL aplicáveis, quando exigidos.
Alternativas: imagens próprias, Unsplash/Pexels conforme licença individual, ícones Lucide (ISC), fontes OFL; manter comprovantes e atribuições exigidas.

## Riscos residuais
- Depoimentos incorporados na página /criacao-de-landing-pages ainda precisam de validação individual e autorização; até lá, devem ser ocultados.
- Números e alegações de resultados em outros componentes, metadados, portfólio e peças publicitárias precisam de evidência documental.
- Auditoria WCAG 2.1 AA completa exige testes manuais por teclado/leitor de tela, contraste medido e navegação em celular.
- Revisar se políticas refletem os tratamentos reais no CRM e nos provedores.
- Verificar política de segurança, retenção de logs, incidentes e gestão de pedidos LGPD no backend.
- Confirmar enquadramento do fornecedor no CDC, Decreto 7.962/2013 (comércio eletrônico) e demais obrigações.
