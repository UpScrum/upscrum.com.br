# UpScrum

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

O público prioritário são gestores de empresas, órgãos públicos e ONGs que buscam soluções digitais sob medida para suas organizações.

Esses visitantes precisam entender a adequação técnica da UpScrum ao seu contexto e iniciar uma conversa técnica ou solicitar uma demonstração.

## Product Purpose

O site apresenta os serviços de engenharia de software, inteligência artificial aplicada e infraestrutura da UpScrum e suas soluções de gestão de adoções de pets e rastreamento de veículos e ativos.

O resultado principal esperado é gerar contatos qualificados para conversas técnicas e demonstrações. Não há uma meta numérica de conversão definida neste registro.

## Positioning

A UpScrum combina software livre, soluções sob medida e autonomia do cliente sobre código, dados e infraestrutura. Aplica IA a necessidades operacionais com proteção de dados e trabalha com entregas quinzenais.

Esses compromissos foram confirmados pelo responsável pelo projeto. Condições comerciais, licenças específicas e garantias de cada contratação precisam ser verificadas antes de publicar detalhes adicionais.

## Operating Context

O visitante conhece a empresa na página principal, consulta serviços e metodologia, pode explorar as páginas de adoções e rastreamento e envia seu contexto por formulário de contato.

O site é público e seu conteúdo está em português brasileiro. O contato institucional apresentado é contato@upscrum.com.br.

O conteúdo existente descreve diagnóstico técnico, arquitetura e prova de conceito, desenvolvimento em sprints quinzenais e implantação com transferência de conhecimento. O detalhamento desse processo por contrato permanece sujeito a confirmação.

## Capabilities and Constraints

- O repositório contém o site institucional, não o código das plataformas operacionais anunciadas.
- `index.html` apresenta soluções, serviços técnicos, soberania operacional, metodologia e contato.
- `plataforma-adocoes.html` apresenta gestão de organizações, pets, adotantes e adoções, além do fluxo de triagem, publicação, análise e acompanhamento.
- `rastreamento.html` apresenta localização, históricos, cercas geográficas, alertas, relatórios e gestão de dispositivos e acessos. A disponibilidade dos dados depende dos equipamentos e da configuração contratada.
- O site usa HTML, CSS e JavaScript, sem framework ou processo de build declarado no repositório. As páginas podem ser servidas estaticamente para inspeção local.
- Os formulários compartilham `contact.js` e enviam dados para `/api/contact`. O endpoint em `api/contact.js` usa Resend e depende de `RESEND_API_KEY`; remetente e destinatário podem ser configurados por variáveis de ambiente.
- `vercel.json` mantém as URLs com extensão `.html` (`cleanUrls: false`). A existência dessa configuração não comprova o estado de uma implantação.
- A validação do envio de e-mail exige o ambiente de API configurado; um servidor de arquivos estáticos permite apenas inspecionar as páginas.

## Brand Commitments

- Preservar o nome UpScrum e a comunicação em português brasileiro.
- Adoções e rastreamento mantêm identidades visuais próprias, com vínculo e navegação claros para a UpScrum. Preferência confirmada pelo responsável após a primeira avaliação da interface.
- Manter software livre, autonomia sobre código/dados/infraestrutura, IA com proteção de dados e entregas quinzenais como compromissos do produto.
- O conteúdo atual adota linguagem técnica e institucional. Mudanças relevantes de posicionamento ou promessas precisam de confirmação do responsável.

## Evidence on Hand

- O conteúdo institucional e as descrições das soluções estão nos três arquivos HTML do projeto.
- Os formulários e sua integração de e-mail estão implementados em `contact.js` e `api/contact.js`; o funcionamento em produção não foi verificado neste levantamento.
- Os painéis, exemplos de consultas e dados de pets apresentados nas páginas não constituem, por si só, evidência de clientes, resultados ou operações reais.
- Não foram identificados no repositório estudos de caso verificáveis, depoimentos de clientes ou indicadores de resultado. Não fabricar esses materiais.
- Afirmações específicas já presentes no site, como retorno em até 24 horas úteis, ausência total de vazamento, conformidade legal ou condições de licenciamento, não receberam validação individual nesta entrevista. Confirmar antes de tratá-las como garantias gerais ou ampliá-las.

## Product Principles

1. Ajudar o gestor a reconhecer se a solução atende à sua necessidade e a iniciar um contato qualificado.
2. Priorizar autonomia do cliente e uso de software livre nas soluções oferecidas.
3. Relacionar IA e engenharia a problemas operacionais concretos, com proteção de dados.
4. Tornar o processo de entrega compreensível, com ciclos quinzenais e participação do cliente.
5. Sustentar promessas com capacidades e evidências verificáveis; explicitar dependências de equipamento, configuração e contratação.

## Open Decisions

- Prioridade comercial entre serviços sob medida, adoções e rastreamento.
- Segmentos, regiões e perfis de organização que devem receber maior foco.
- Casos reais e materiais de comprovação autorizados para publicação.
- Requisitos específicos de acessibilidade e eventuais padrões obrigatórios.
- Condições comerciais e garantias específicas não confirmadas nesta entrevista.
