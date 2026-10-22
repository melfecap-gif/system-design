# Plano — Lunarium: Luas do Sistema Solar

## Objetivo e implementação

Manter a página editorial em português baseada no conteúdo e nos links públicos da NASA Science sobre luas, mas substituir a direção visual anterior pela aplicação estrita e uniforme do sistema visual Shopify Editions Spring 2026 fornecido no arquivo ZIP e confirmado no site oficial. O padrão não será um moodboard: suas famílias tipográficas, tokens de cor, grades, proporções, hierarquia, tratamentos de mídia, navegação, botões e superfícies governam todas as seções, em desktop e mobile. Marca e conteúdo próprios de Lunarium/NASA permanecem; não reproduzir textos, produtos, logo ou ativos proprietários do Shopify como conteúdo do produto.

Aplicação React + TypeScript + Vite, sem backend, serviços ou credenciais. Fontes National2 e ShopifyInter são fornecidas localmente a partir do ZIP e ficam em `public/fonts/`. Imagens públicas relevantes da NASA ficam em `public/images/`; o `public/manus-routes.json` declara a página inicial. O documento de plano registra a especificação e as fontes. `src/main.tsx` conserva estrutura, acessibilidade, conteúdo, links externos e interação de fases; `src/styles.css` é refeito com os tokens e comportamentos do sistema; `index.html`, arquivos TypeScript/Vite e `package.json` sustentam a entrega estática.

## Design — Shopify Editions Spring 2026 aplicado estritamente

- **Movimento visual**: sistema editorial responsivo do próprio Shopify Editions Spring ’26: editorial tipográfico, fotografia imersiva e navegação/composição próprias de uma publicação de produto contemporânea.
- **Princípios centrais**: (1) hierarquia determinada por escala tipográfica e alinhamento, não por ornamentos; (2) mídia ampla e contextual integrada a blocos de conteúdo; (3) composição editorial fluida em grade responsiva de 6/12 colunas; (4) alternância controlada de superfícies claras e escuras usando os tokens da fonte.
- **Filosofia de cor**: esquema estritamente monocromático Shopify. Base `#090909`/`#fff`; no modo claro, texto/títulos/links `#090909e6` e corpo `#09090999`; no modo escuro, títulos `#ffffffe6`, corpo `#fff9`, links `#fff`. CTA preto/branco conforme o modo. Azul `#0062d3` exclusivamente para anel de foco. Cores de astronomia aparecem naturalmente apenas nas imagens documentais da NASA; nenhum chartreuse, coral, lilás ou paleta promocional autoral.
- **Paradigma de layout**: grade fluida 6 colunas em mobile e 12 em telas maiores; gutters de 16/32 px e margens de 16/32/120 px; conteúdo até 72rem. Hero cinematográfico quase em tela inteira com imagem de fundo e título sobreposto; seções editoriais e cartas tipográficas usam alinhamento e largura de coluna; imagens alternam blocos integrais e banners de largura ampla. Menus mantêm as mesmas relações nos dois breakpoints.
- **Assinaturas**: hero fotográfico escuro com headline National2 dominante; navegação principal compacta em cápsula/pílula com CTA de alto contraste; headers/editorial cards minimalistas construídos com tipografia, grids, divisores e imagem — sem órbitas decorativas, esferas falsas, gradientes neon, cartões coloridos ou serifas.
- **Interação**: links e CTAs de alto contraste, âncora em navegação fluida, lista de conteúdo com divisores e hover discreto; seleção de fase lunar continua explícita e acessível por teclado. Foco visível usa o anel azul Shopify, sem ocultar indicadores.
- **Animação**: transições breves e discretas para estado ativo/hover; movimento não compete com títulos ou imagens; preferência `prefers-reduced-motion` remove animação não essencial.
- **Tipografia**: National2 local, peso 400, para títulos display em escala fluida (t1 até 120 px em desktop e 60–80 px em mobile, line-height ~.96, tracking próximo a −.08em; t2 aprox. 64–96 px; t3 aprox. 40–64 px). ShopifyInter local, 14–15 px e line-height ~1.3–1.45, para corpo, controles e rótulos. Sans-serif em toda interface; sem tipografia serifada/itálica ou monoespaçada como motivo visual.
- **Essência da marca**: Lunarium apresenta o conhecimento público da NASA sobre luas como uma edição editorial explorável; atributos: claro, científico, imersivo.
- **Voz**: manchetes curtas e informativas; ações sem exagero. Exemplos: “As luas contam histórias.” e “Conheça os fatos”.
- **Wordmark**: manter o nome Lunarium em National2 com um pequeno sinal orbital já existente, monocromático e subordinado ao nome.
- **Cor de marca**: preto Shopify `#090909`, aplicado como superfície principal; branco como contraste.

## Fontes do padrão

1. Material entregue pelo usuário: `shopify.com_editions_spring2026(3).zip`, página capturada `site/www.shopify.com/editions/spring2026.html` e sua CSS Tailwind/folha de fontes.
2. Referência pública visual: [Shopify Editions Spring ’26](https://www.shopify.com/editions/spring2026).
3. Tokens observados no CSS fornecido: `--color-theme-heading`, `--color-theme-body`, `--color-theme-link`, `--color-theme-cta-bg`, `--color-theme-cta-text`, `--color-theme-focus-ring`, `--spacing-grid-gutter`, `--spacing-grid-margin` e as classes tipográficas `t1`, `t2`, `t3`, `t5`.

## Estrutura do projeto

- `src/main.tsx`: componentes React, conteúdo editorial, links NASA, navegação, modo interativo de fases da Lua.
- `src/styles.css`: design system, temas claro/escuro, grades e breakpoints responsive.
- `public/fonts/`: arquivos locais National2 e ShopifyInter extraídos do ZIP do usuário.
- `public/images/`: imagens editoriais públicas NASA selecionadas.
- `public/manus-routes.json`: manifesto da rota pública `/`.
- `index.html`, `app.config.ts`, `vite.config.ts`, `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `tsconfig*.json`: inicialização, toolchain, diagnóstico e build.
- `TODO.md`: cláusulas do pedido e progresso sustentado por evidência.

## Entrega

Build estático com Vite. Validar o TypeScript/build, manifesto de rota, carregamento de imagens e fontes, inspeção da prévia desktop/mobile e preservação dos critérios editoriais e interativos. Registrar a alteração no checkpoint canônico, sem declarar publicação ou URL pública se não houver confirmação de publicação.


## Publicação adicional — GitHub Pages

O destino é o site público de projeto `https://melfecap-gif.github.io/system-design/`, mantido separado da publicação raiz do WebDev. Preservar `pnpm build` para Manus/WebDev e acrescentar um script específico que gera `dist` com a base Vite `/system-design/`; o código deve prefixar as imagens com `import.meta.env.BASE_URL`, e Vite deve prefixar os arquivos públicos de fonte e favicon. Publicar o conteúdo de `dist/` na raiz da branch `gh-pages` e selecionar essa branch como origem do Pages. Usar publicação por branch, não GitHub Actions.

O usuário optou por tornar `melfecap-gif/system-design` público. Portanto, o código-fonte e o histórico também são públicos, além do site; o GitHub Pages está confirmado como ativo. Não ativar a publicação automática do WebDev. Fontes: [elegibilidade e criação de Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [origens de publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [visibilidade do site](https://docs.github.com/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).

Creating a Pages site through the REST API requires both Pages:write and Administration:write repository permissions; when the available integration lacks these, use GitHub’s authenticated Pages settings UI to select `gh-pages` at `/`. Source: [GitHub REST API — Create a Pages site](https://docs.github.com/en/rest/pages/pages?apiVersion=2022-11-28#create-a-github-pages-site).
