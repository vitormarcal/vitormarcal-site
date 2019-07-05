---
id: 'dados-abertos-elogiado-pela-uniao-interparlamentar'
name: 'dados-abertos-elogiado-pela-uniao-interparlamentar'
title: Dados Abertos é elogiado pela União Interparlamentar
author: Vítor Marçal
description: A organização elogiou, dentre outros, a forma de entrega dos dados e a boa comunicação com a sociedade. Com muito orgulho, fui colaborador desse importante projeto para a sociedade civil.
created_at: 05 de Julho de  2019
obs: Originalmente publicado em <a href="https://deixe-fazer.blogspot.com/2015/01/em-defesa-da-menor-minoria.html" target="_blank" rel="noopener noreferrer">Deixe-Fazer</a>
tags:
  - opnião
  - liberdades
  - falsos direitos
---

A organização tem sede em Genebra, na Suíça, e tem como objetivo mediar contatos multilaterais dos parlamentos.

>"Vários parlamentos fizeram grandes investimentos nos últimos anos para disponibilizar ao público informações parlamentares em formatos de dados abertos, para aumentar a transparência e facilitar a participação do público. No entanto, o uso dos dados abertos tem sido freqüentemente limitado. A Câmara dos Deputados do Brasil decidiu, portanto, estabelecer uma estratégia de marketing para aumentar e diversificar o uso de seus dados parlamentares."

## Sobre o Dados Abertos

Segundo a <a href="https://dadosbaertos.camara.leg.br/" target="_blank" rel="noopener noreferrer">página oficial do Dados Abertos da Câmara </a>, o portal pode ser utilizado para acompanhar a tramitação e as votações de projetos e pareceres, verificar a atuação e os gastos do deputado que a sociedade ajudou a eleger, descobrir os eventos realizados pelas comissões, e muito mais!

O novo portal têm a filosofia de ser acessível à pessoas não técnicas, leia não programadores. Os dados são disponibilizados em diversos formatos:
  
  * através de uma Restful API com respostas em JSON OU XML
  
  * atravês de conjuntos de arquivos pré-gerados, prontos para serem baixados, nos formatos XLSX (Microsoft Excel), ODS (OpenOffice / LibreOffice Calc) e CSV, além de XML e JSON

Com essas informações, muita gente tem feito trabalhos bem legais como: 

  * análise de sentimentos de discursos
  * análise de alinhamento político (será que o deputado vota conforme o alinhamento que ele diz ter?)
  * análise de despesas do deputado 
 
As possibilidades de uso desse tipo de dados são infinitas e concerteza alguém em algum lugar já está pensando em algum uso nunca antes pensado!


## Meu papel no desenvolvimento do Dados Abertos

Integrei a equipe de dados abertos em Março de 2018 até meados de Junho de 2019, período em que tive a honra de ser o <em>único programador atuante na equipe<em>!. Eventualmente ainda presto alguns serviços à equipe mas meu foco agora está em outro setor da Câmara em busca de algumas desnormalizações de dados e otimização de alguns serviços (que impactam diretamente o dados abertos).
Durante esse período trabalhei principalmente em análises em diversos databases em busca de entregar novos dados da melhor forma possível para o usuário: de acordo com a filosifia do Dados Abertos, não bastava dar transparência dos dados, é necessário que estes dados façam sentido para o cidadão.
Concerteza essse foi um período de grande desafio e crescimento profissional. 
Tenho muito orgulho de dizer que contribui positivamente para esse projeto, que não tem fins lucrativos, mas sim objetivos sociais.
Nesse período de tempo, fiz várias otimizações na API, nas queries de consultas aos databases.

Dentre os serviços criticos que ameaçavam a saúde da API, estava o serviço rest que informava o histórico de reuniões de um deputado. Como apontado por um usuário, a resposta deste serviço era muito demorada, com timeouts frequentes.
Com uma trabalhosa análise de das tabelas, fiz um belo trabalho de tuning que fez o serviço responder em alguns milisegundos. O mesmo para serviços mais requisitados como o de proposições, deputados ...

Nesse período, fui responsável por algo inédito na busca da Câmara dos Deputados: implementei a busca de membros de um partido dado tal período de tempo. Pode verificar, em nenhum lugar, que não seja no serviço <code>/partidos/{id}/membros </code> da API existe essa informação (até a data de escrita deste post).

Algo que realmente adorei desenvolver foi a nova arquitetura de geração de arquivos dos Dados Abertos. Até minha chegada a geração era 
