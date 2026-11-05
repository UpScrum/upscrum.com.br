# Auditoria técnica — UpScrum

Data: 29/10/2026. Escopo: `index.html`, `plataforma-adocoes.html`, `rastreamento.html` e recursos compartilhados. Auditoria seguida de correção e acabamento dos problemas confirmados, conforme autorização para continuar as melhorias.

## Resultado após correções

| Dimensão | Nota /4 | Evidência e limite |
|---|---:|---|
| Acessibilidade | 3 | Axe sem violações nas seis combinações página/largura; teclado e redução de movimento verificados. Sem teste com leitor de tela real. |
| Desempenho | 3 | HTML/CSS/JS sem framework, sem biblioteca de produção adicionada. Fontes externas permanecem; Core Web Vitals em produção não medidos. |
| Temas e tokens | 3 | Paletas próprias preservadas; recursos de acessibilidade compartilhados. Ainda existem cores literais. Tema escuro não faz parte do escopo confirmado. |
| Responsividade | 3 | Sem transbordamento de página nas larguras 320, 390, 768 e 1440 px; toque sintetizado no menu e FAQ. Sem aparelhos físicos. |
| Integridade | 3 | Conteúdo demonstrativo identificado e controles exercitados. Permanecem padrões estilísticos repetidos, sem justificativa para redesenhar as identidades aprovadas. |
| **Total** | **15/20** | **Bom. Pontuação heurística, não certificação.** |

## Integridade da implementação

O sistema mantém as identidades distintas aprovadas para adoções e rastreamento, com caminhos institucionais para a UpScrum. A implementação passou nas verificações de navegação, foco, estados dos formulários e dimensões de tela executadas nesta sequência de trabalho.

## Problemas confirmados e corrigidos

| Prioridade | Problema | Local | Impacto e correção |
|---|---|---|---|
| P1 | Contraste 4,08:1 no texto do rodapé | `index.html`, `.footer-bottom` | Dificultava leitura e falhava no limite AA para texto normal (WCAG 1.4.3). Aplicado o token de texto secundário para superfícies escuras. |
| P1 | Texto dos botões sobre laranja claro | `plataforma-adocoes.html`, `.btn-primary` | Contraste abaixo de 4,5:1. Botões usam agora o tom escuro já pertencente à identidade do produto. Verificação posterior sem ocorrência no axe. |
| P2 | Salto de h1 para h3 | `plataforma-adocoes.html`, painel introdutório | Hierarquia dificultava orientação por títulos. Substituído por h2, preservando a aparência pelo seletor correspondente. |
| P2 | Abas sem teclado composto | `index.html`, console | Adicionados foco itinerante, setas com retorno circular, Home/End e acesso ao painel com Tab. Alinhamento ao padrão de abas ARIA; não depende apenas de mouse. |
| P2 | Menu principal incompleto para teclado e redimensionamento | `index.html`, menu móvel | Adicionados aria-controls, nome de abrir/fechar, Escape com retorno de foco, fechamento fora do cabeçalho, foco na seção após navegação e limpeza ao mudar para desktop. |
| P2 | Movimento sem alternativa adequada | `accessibility.css` e páginas | Adoções agora exibe o conteúdo imediatamente quando há preferência por movimento reduzido. Na home, removido o desligamento global por duração artificial de 0,01 ms; animações decorativas e transições de movimento recebem alternativas explícitas. |
| P2 | Falta de atalho para o conteúdo | Todas as páginas | Adicionado primeiro link de teclado, destino principal focável e estilo compartilhado. Auxilia a evitar blocos repetidos (WCAG 2.4.1). |

Nenhum bloqueio P0 foi demonstrado. Os problemas listados acima foram resolvidos no escopo verificado.

## Método e evidências

- Chrome headless local com Playwright; ferramentas instaladas somente em diretório temporário, sem dependências adicionadas ao site.
- Axe-core com regras WCAG 2 A/AA, WCAG 2.1 AA e boas práticas, nas três páginas em 390 e 1440 px: zero violações reportadas após as correções.
- Layout nas três páginas em 320, 390, 768 e 1440 px.
- Navegação pelos links de pular ao conteúdo; setas, Home/End e foco das abas; Escape e foco do menu; fechamento após redimensionamento; FAQ de rastreamento.
- Toque sintetizado por Chromium no menu móvel principal e FAQ. Isso não equivale a ensaio em Safari, iPhone ou Android físico.
- Preferência `prefers-reduced-motion: reduce`: conteúdo visível, animações decorativas interrompidas e rolagem sem movimento suave.
- Revisão das capturas desktop após alteração de contraste e títulos; sem erros JavaScript nas interações verificadas.
- `git diff --check` e verificação de sintaxe de `contact.js` aprovados.
- Os formulários já haviam passado por simulações de respostas 400/429/500, rede, timeout, sucesso e nova tentativa, sem envio real de e-mails.

## Detector e falsos positivos

O detector estático retornou 36 ocorrências: 13 de contraste, 10 de ícones sobre títulos, 3 etiquetas introdutórias, 3 cartões aninhados, 2 espaçamentos, 2 fontes comuns, um ponto pulsante, um halo e uma grade.

As 13 ocorrências estáticas de contraste não equivalem a 13 falhas reproduzidas: o axe sobre a renderização posterior não apontou violações nos tamanhos verificados. O detector estático não resolve todos os contextos de variáveis, gradientes e superfícies; seus avisos precisam dessa confirmação.

Os gutters por `.container` justificam os alertas de espaçamento lateral; a grade e parte dos cartões pertencem à ilustração de mapa. Fontes populares e padrões estilísticos comuns não são falhas funcionais. As identidades existentes foram preservadas deliberadamente.

## Limites e próximos passos

- Leitor de tela real, zoom de navegador a 200%, Safari/Firefox e aparelhos físicos não foram verificados. Ampliação de fonte raiz a 200% e forced-colors emulado foram verificados na rodada final abaixo. Não declarar conformidade WCAG integral com base no resultado automatizado.
- Disponibilidade, entrega de e-mail e desempenho em produção não foram medidos. Nenhuma publicação ou requisição real ao provedor de e-mails foi realizada nesta auditoria.
- Manter os testes de foco, estados e contraste ao alterar navegação, paletas e formulários.
- Para uma etapa posterior: `$impeccable adapt` pode ampliar a validação em aparelhos e zoom reais; `$impeccable polish` deve concluir qualquer correção resultante desses ensaios.

## Verificação final de ampliação e estados

As três páginas foram verificadas com fonte raiz ampliada a 200% em viewport de 1440 px e com reflow a 720 px. Esse ensaio amplia o texto; não equivale ao controle de zoom nativo do navegador.

A inspeção das capturas encontrou e levou à correção de dois problemas que uma simples medida de largura não detectava:

- O cabeçalho principal tinha altura fixa de 72 px, que cortava seus links com texto ampliado. Agora usa altura mínima e cresce com o conteúdo. As margens de rolagem do conteúdo também consideram o tamanho da fonte.
- Os cartões da ilustração de rastreamento usavam posições absolutas e se sobrepunham ao ampliar o texto. Agora participam de uma grade que cresce com seu conteúdo; os indicadores internos se reorganizam conforme o espaço. Foram verificados ausência de sobreposição e de corte interno em 320, 390 e 1440 px e com fonte a 200%.

Verificações adicionais concluídas:

- Alto contraste emulado pelo Chromium (`forced-colors: active`) nas três páginas, com revisão das capturas e foco visível no atalho de conteúdo.
- Nenhum fragmento interno sem destino e nenhum arquivo local CSS/JavaScript com falha de carregamento.
- Axe sem violações nas três páginas com mensagem de falha do formulário visível; respostas da API foram simuladas, sem envio de e-mails.
- Testes de teclado, foco, redução de movimento, menu móvel e FAQ repetidos após as correções e aprovados.
- Detector final com 36 ocorrências, sem acréscimos de grupos ou quantidades em relação à rodada anterior. Mantém-se a análise contextual dos alertas estáticos descrita acima.

A revisão local está concluída. Permanecem externos a este ambiente os ensaios com aparelhos físicos/leitor de tela e a validação de implantação e entrega de e-mail em produção. Nenhuma publicação foi feita.
