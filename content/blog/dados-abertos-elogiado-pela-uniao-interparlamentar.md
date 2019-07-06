---
id: 'dados-abertos-elogiado-pela-uniao-interparlamentar'
name: 'dados-abertos-elogiado-pela-uniao-interparlamentar'
title: Dados Abertos é elogiado pela União Interparlamentar
author: Vítor Marçal
description: A organização elogiou, dentre outros, a forma de entrega dos dados e a boa comunicação com a sociedade. Com muito orgulho, fui colaborador desse importante projeto para a sociedade civil.
created_at: 06 de Julho de  2019
tags:
  - dados abertos
  - restful api
  - etl tools
---

A organização tem sede em Genebra, na Suíça, e tem como objetivo mediar contatos multilaterais dos parlamentos. Dentre vários destaques,  que <a href="https://www.ipu.org/open-data-availability-not-enough-marketing-strategy-brazilian-chamber-deputies" title="Página da União Interparlamentar, link da notícia" target="_blank" rel="noopener noreferrer">a publicação </a> comentou:

>Vários parlamentos fizeram grandes investimentos nos últimos anos para disponibilizar ao público informações parlamentares em formatos de dados abertos, para aumentar a transparência e facilitar a participação do público. No entanto, o uso dos dados abertos tem sido frequentemente limitado. A Câmara dos Deputados do Brasil decidiu, portanto, estabelecer uma estratégia de marketing para aumentar e diversificar o uso de seus dados parlamentares.

## Sobre os Dados Abertos

Segundo a <a href="https://dadosbaertos.camara.leg.br/" title="Portal dos Dados Abertos da Câmara dos Deputados" target="_blank" rel="noopener noreferrer">página oficial dos Dados Abertos da Câmara</a>, o portal pode ser utilizado para acompanhar a tramitação e as votações de projetos e pareceres, verificar a atuação e os gastos do deputado que a sociedade ajudou a eleger, descobrir os eventos realizados pelas comissões, e muito mais!

O novo portal tem a filosofia de ser acessível às pessoas não técnicas, leiam-se não programadores. Os dados são disponibilizados em diversos formatos:
  
  * através de uma Restful API com respostas em JSON OU XML
  * através de conjuntos de arquivos pré-gerados, prontos para serem baixados, nos formatos XLSX (Microsoft Excel), ODS (OpenOffice / LibreOffice Calc) e CSV, além de XML e JSON

Com essas informações, muita gente tem feito trabalhos bem legais como: 

  * análise de sentimentos de discursos
  * análise de alinhamento político (será que o deputado vota conforme o espectro ideológico que ele diz ter?)
  * análise das despesas do deputado 
 
As possibilidades de uso desses dados são infinitas e com certeza alguém em algum lugar já está pensando em alguma aplicação nunca pensada!


## Meu papel no desenvolvimento dos Dados Abertos

Integrei a equipe de dados abertos em março de 2018 até meados de junho de 2019, período em que tive a honra de ser o <em>único programador atuante no time</em>! Eventualmente, ainda presto alguns serviços a equipe, mas meu foco agora está em outro setor da Câmara em busca de algumas desnormalizações e otimizações da entrega de dados (que impactam diretamente os Dados Abertos).
Durante esse período trabalhei, principalmente, com análises em diversas bases de dados em busca de entregar novos dados da melhor forma possível para o usuário: de acordo com a filosofia dos Dados Abertos, <em>não basta dar transparência aos dados, deve ser necessário que estes dados façam sentido para o cidadão</em>.

Com toda certeza, esse foi um período de grande desafio e crescimento profissional. 
Tenho muito orgulho de dizer que contribui positivamente para esse projeto, que não tem fins lucrativos, mas sim objetivos sociais.
Nesse período fiz várias otimizações na API, nas queries, substitui procedures com baixo desempenho, etc.

Dentre serviços críticos que ameaçavam a saúde da API, um serviço rest que informava o histórico de reuniões de um deputado. Como apontado por um usuário, a resposta deste serviço era muito demorada, apresentando timeouts frequentes.
Uma trabalhosa análise dos registros resultou em um belo trabalho de tunning que fez o serviço responder de picos de 50 segundos para alguns milissegundos. O mesmo para serviços mais requisitados como o de proposições, deputados, autores, etc.

Nesse tempo, fui responsável por algo inédito na busca da Câmara dos Deputados: implementei a informação de membros de um partido dado tal período. Pode verificar, em nenhum lugar nos portais da Câmara, que não seja no serviço **/partidos/{id}/membros** da API existe essa informação (até a data de escrita deste post).

Algo que realmente adorei desenvolver foi a nova arquitetura de geração de arquivos dos Dados Abertos. Até minha chegada a geração era
via uma ferramenta ETL (Extract, Transform, Load) chamada Pentaho. Cheguei a desenvolver alguns jobs nessa ferrmenta para os Dados Abertos, mas logo vi que, considerando o que desejávamos para o Portal de Dados Abertos, ela não era a ferramenta ideal. Então, criei uma ferramenta de ETL em Java, totalmente extensível a mudanças. O melhor foi que jobs que executavam no Pentaho em 50 minutos passaram a serem executados pela nova ferramenta em 3 minutos. Para quem tenha ficado cético sobre eu ter substituído uma ferramenta ETL especialista de mercado por uma solução própria, já adianto que existe uma boa discussão na comunidade sobre ETL como ferramenta contra hand code (mãos na massa, produzida sob demanda). Todavia, este é assunto para outro post.

## Como obter os dados disponíveis

Você pode verificar a <a href="https://dadosbaertos.camara.leg.br/swagger/api.html" title="Página da documentação da API do Dados Abertos" target="_blank" rel="noopener noreferrer">página da documentação da API</a>. Lá contém todas as relações com os recursos (dados) abertos à sociedade. 

Na área da Api Restful, você pode inclusive testar as chamadas na própria página, verificar quais dados retornam, como funciona o esquema de paginação e links, os filtros permitidos, etc. <strong>Atenção!</strong> Essa é uma página de documentação com o propósito de ser uma interface simples e intuitiva para que usuários possam descobrir e testar a Api. Você não precisa depender dela para construir suas aplicações. Digo isto, por que ao conversar com alguns representantes de um certo partido, percebi que eles assimilaram a página erroneamente: julgavam que ela era um sistema, o próprio meio de disponibilização dos Dados Abertos. Pelo contrário! É apenas uma documentação intuitiva. Você pode fazer suas chamadas copiando a url no seu navegador, por exemplo, a seguinte url retorna os dados da PEC 300: <a href="https://dadosabertos.camara.leg.br/api/v2/proposicoes/2121866" title="PEC 300" target="_blank" rel="noopener noreferrer">https://dadosabertos.camara.leg.br/api/v2/proposicoes/2121866</a>.

Na área de arquivos, você pode baixar os conjuntos de dados no seu formato preferido. Ideal para quem precisa fazer carga de dados!

Convido a você a visitar e explorar a API, ela é sua, é minha, é de todos da sociedade civil!
