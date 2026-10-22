# TODO — Lunarium — Luas do Sistema Solar

## Aplicação estrita do Shopify Editions Spring 2026

- [x] Aplicar o Shopify Editions Spring 2026 como sistema visual padrão do site inteiro, não como uma referência: usar National2 em títulos e ShopifyInter em corpo/interface; tokens preto/branco/cinzas e CTA de alto contraste; grade responsiva de 6/12 colunas; margens e gutters do sistema; navegação compacta/pílula; hero de mídia cinematográfica; superfícies clara/escura, mídia ampla e componentes tipográficos minimalistas; retirar a paleta chartreuse/coral/lilás, as serifas itálicas e os elementos decorativos que não pertencem ao sistema.
- [x] Manter consistentes em todas as páginas/seções, controles, estados, componentes, footer e breakpoints os tokens de tipografia, cor, spacing, grids, imagens, botões, raios e interações do sistema Shopify Editions descrito no plano.

## Página editorial responsiva e acessível

- [x] Criar um novo site seguindo o system design visual fornecido no arquivo `shopify.com_editions_spring2026(3).zip` como sistema visual normativo, aplicado ao site inteiro.
- [x] Apresentar o conteúdo editorial da referência da NASA sobre luas do Sistema Solar em português, preservando sentido e cobertura.
- [x] Implementar navegação editorial inspirada na página da NASA, adaptada ao site Lunarium e apresentada em português.
- [x] Implementar uma abertura com o título editorial “As luas contam histórias.”, identidade Lunarium — Luas do Sistema Solar, introdução contextual e destaque visual baseado no system design fornecido.
- [x] Implementar a seção “Quantas luas existem?” com os números, explicações e contexto científico cobertos pela referência.
- [x] Implementar a seção “Outras luas” apresentando os corpos e conceitos complementares abordados no conteúdo editorial original.
- [x] Implementar uma seção dedicada à Lua da Terra, com texto informativo e imagem pública relacionada.
- [x] Implementar uma seção sobre as fases da Lua, explicando o ciclo lunar em português com apoio visual.
- [x] Implementar a área “Notícias sobre luas”, reproduzindo em português a cobertura editorial e os destaques presentes na página de referência.
- [x] Implementar a exploração das luas do Sistema Solar organizada por planeta ou sistema planetário, integrando imagens públicas relevantes da NASA à experiência editorial.
- [x] Implementar a seção final “Descubra mais tópicos da NASA”, com chamadas e links relacionados coerentes com a página de referência.
- [x] Garantir layout responsivo e acessível, aplicando de forma consistente componentes, tipografia, espaçamento, cores e comportamentos do arquivo visual fornecido.

## Conteúdo e proveniência

- [x] Incluir créditos visíveis para as imagens públicas da NASA usadas na página e uma nota de fonte editorial para a referência original.
- [x] Manter os links externos para os tópicos da NASA e para a galeria de luas.
- [x] Expor a data de atualização da página de referência: 13 de outubro de 2026.

## Entrega técnica

- [x] Publicar `GET /manus-routes.json` com a rota principal declarada.
- [x] Configurar o dev server para escutar em `0.0.0.0:3000`.
- [x] Confirmar que o site carrega sem erros de runtime e que a página é navegável por teclado após a mudança visual.


## Publicação no GitHub Pages

- [ ] Publicar o site Lunarium em `https://melfecap-gif.github.io/system-design/`, usando um build específico com a base `/system-design/` e uma branch de publicação independente, sem alterar o build padrão da prévia WebDev.
- [ ] Manter o repositório-fonte privado se o plano GitHub permitir Pages a partir de fonte privada; se o GitHub exigir um repositório público, tornar `melfecap-gif/system-design` público conforme autorização explícita do usuário, sabendo que isso expõe o código-fonte e o histórico além do site.
