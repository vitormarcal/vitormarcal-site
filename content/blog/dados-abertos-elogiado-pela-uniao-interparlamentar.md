---
id: 'dados-abertos-elogiado-pela-uniao-interparlamentar'
name: 'dados-abertos-elogiado-pela-uniao-interparlamentar'
title: Dados Abertos é elogiado pela União Interparlamentar
author: Vítor Marçal
description: A organização elogiou, dentre outros, a forma de entrega dos dados e a boa comunicação com a sociedade. Com muito orgulho, fui colaborador desse importante projeto para a sociedade civil.
created_at: 05 de Julho de  2019
tags:
  - dados abertos
  - restful api
  - etl tools
---

A organização tem sede em Genebra, na Suíça, e tem como objetivo mediar contatos multilaterais dos parlamentos. Dentre vários destaques,  que <a href="https://www.ipu.org/open-data-availability-not-enough-marketing-strategy-brazilian-chamber-deputies" target="_blank" rel="noopener noreferrer">a publicação </a> comentou:

>"Vários parlamentos fizeram grandes investimentos nos últimos anos para disponibilizar ao público informações parlamentares em formatos de dados abertos, para aumentar a transparência e facilitar a participação do público. No entanto, o uso dos dados abertos tem sido freqüentemente limitado. A Câmara dos Deputados do Brasil decidiu, portanto, estabelecer uma estratégia de marketing para aumentar e diversificar o uso de seus dados parlamentares."

## Sobre o Dados Abertos

Segundo a <a href="https://dadosbaertos.camara.leg.br/" target="_blank" rel="noopener noreferrer">página oficial do Dados Abertos da Câmara </a>, o portal pode ser utilizado para acompanhar a tramitação e as votações de projetos e pareceres, verificar a atuação e os gastos do deputado que a sociedade ajudou a eleger, descobrir os eventos realizados pelas comissões, e muito mais!

O novo portal têm a filosofia de ser acessível à pessoas não técnicas, leia-se não programadores. Os dados são disponibilizados em diversos formatos:
  
  * através de uma Restful API com respostas em JSON OU XML
  
  * atravês de conjuntos de arquivos pré-gerados, prontos para serem baixados, nos formatos XLSX (Microsoft Excel), ODS (OpenOffice / LibreOffice Calc) e CSV, além de XML e JSON

Com essas informações, muita gente tem feito trabalhos bem legais como: 

  * análise de sentimentos de discursos
  * análise de alinhamento político (será que o deputado vota conforme o alinhamento que ele diz ter?)
  * análise de despesas do deputado 
 
As possibilidades de uso desse tipo de dados são infinitas e concerteza alguém em algum lugar já está pensando em algum uso nunca antes pensado!


## Meu papel no desenvolvimento do Dados Abertos

Integrei a equipe de dados abertos em Março de 2018 até meados de Junho de 2019, período em que tive a honra de ser o <em>único programador atuante na equipe</em>! Eventualmente ainda presto alguns serviços à equipe mas meu foco agora está em outro setor da Câmara em busca de algumas desnormalizações de dados e otimizações de alguns serviços (que impactam diretamente o dados abertos).
Durante esse período trabalhei principalmente com análises em diversos databases em busca de entregar novos dados da melhor forma possível para o usuário: de acordo com a filosofia do Dados Abertos, <em>não basta dar transparência aos dados, é necessário que estes dados façam sentido para o cidadão</em>.

Com toda certeza, essse foi um período de grande desafio e crescimento profissional. 
Tenho muito orgulho de dizer que contribui positivamente para esse projeto, que não tem fins lucrativos mas sim objetivos sociais.
Nesse período de tempo fiz várias otimizações na API, nas queries, subsititui procedures com baixo desempenho etv.

Dentre serviços críticos que ameaçavam a saúde da API,um serviço rest que informava o histórico de reuniões de um deputado. Como apontado por um usuário, a resposta deste serviço era muito demorada, apresentando timeouts frequentes.
Uma trabalhosa análise dos registros resultou em um belo belo trabalho de tunning que fez o serviço responder de picos de 50 segundos para alguns milisegundos. O mesmo para serviços mais requisitados como o de proposições, deputados ...

Nesse período, fui responsável por algo inédito na busca da Câmara dos Deputados: implementei a busca de membros de um partido dado tal período de tempo. Pode verificar, em nenhum lugar, que não seja no serviço <code>/partidos/{id}/membros </code> da API existe essa informação (até a data de escrita deste post).

Algo que realmente adorei desenvolver foi a nova arquitetura de geração de arquivos dos Dados Abertos. Até minha chegada a geração era
via uma ferramenta ETL (Extract, Transform, Load) chamada Pentaho. Cheguei a fazer alguns jobs nele para o Dados Abertos mas logo vi que, considerando o que desejavámos para o Dados Abertos, ela não era a ferramenta ideal. Então, criei uma nova ferramenta de ETL em Java, totalmente extensivel a novas mudanças. O melhor foi que jobs que executavam no Pentaho em 50 minutos passaram a serem executados pela nova ferramenta em 3 minutos. Em outro post abordarei mais detalhes sobre o design da ferramenta mas, para quem tenha ficado cético sobre eu ter substituido uma ferramenta ETL especialista de mercado por uma solução própria, já adianto que existe uma boa discursão na comunidade sobre ETL como ferramenta <i>versus</> hand code (mãos na massa, produzida sob demanda).

## Como acessar os dados

Você pode verificar a <a href="https://dadosbaertos.camara.leg.br/swagger/api.html" target="_blank" rel="noopener noreferrer">página da documentação da API</a>. Lá contém todas as relações com os recursos (dados) abertos à sociedade. 

Na área da Api Restful, você pode inclusive testar as chamadas na própria página, verficar quais dados retornam, como funciona o esquema de paginação e links, os filtros permitidos etc. <strong>Atenção!</strong> Essa é uma página de documentação com o próposito de ser uma interface simples e intuitiva para que usuários possam descobrir e testar a Api. Você não precisa depender dela para construir suas aplicações. Digo isto, por que ao conversar com alguns representantes de um certo partido, percebi que eles assimilaram a página erroneamente: achavam que ela era um sistema, o próprio Dados Abertos. Pelo contrário! É apenas uma documentação intuitiva. Você pode fazer suas chamadas copiando a url no seu navegador, por exemplo, a seguinte url retorna os dados da PEC 300: <a href="https://dadosabertos.camara.leg.br/api/v2/proposicoes/2121866 " target="_blank" rel="noopener noreferrer">https://dadosabertos.camara.leg.br/api/v2/proposicoes/2121866 </a>.

Na área de arquivos, você pode baixar os conjuntos de dados no seu formato preferido. Ideal para quem precisa fazer carga de dados!

Convido a você a visitar e explorar a API, ela é sua, é minha, é de todos da sociedade civil!
