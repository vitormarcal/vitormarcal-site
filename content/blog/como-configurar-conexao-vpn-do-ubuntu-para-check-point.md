---
id: 'como-configurar-conexao-vpn-do-ubuntu-para-check-point'
name: 'como-configurar-conexao-vpn-do-ubuntu-para-check-point'
title: Como configurar conexão vpn do ubuntu para Check Point
author: Vítor Marçal
description: Aqui explico de forma objetiva como conectar ao VPN Checkpoint no ubuntu. Com poucas mudanças, serve para outras distribuições também.
created_at: 19 de Agosto de 2020
data_ordenacao: Aug 19, 2020 17:40:00
tags:
  - vpn checkpoint
  - snx
  - linux
  - ubuntu
---

Aqui explico de forma objetiva como conectar ao VPN Checkpoint, no ubuntu, mas com poucas mudanças, serve para outras distribuições também.

Para configurar siga esses passos:

- Instale primeiro os pré-requisitos de acordo com o comando abaixo, <a href="https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk65210" target="_blank" rel="noopener noreferrer">ou conforme esta página</a>:
    
    Caso a arquitetura do seu sistema seja 32x:
    
    ```
    sudo apt-get install libpam0g:i386 libx11-6:i386 libstdc++6:i386 libstdc++5:i386
    ```
    
    Caso a arquitetura do seu sistema seja 64x:
    
    ```
    sudo apt install libpam0g:i386 libx11-6:i386 libstdc++6:i386 libstdc++5:i386 libnss3-tools
    ```
    
- Baixe o script de instalação do <a href="https://supportcenter.checkpoint.com/supportcenter/portal/user/anon/page/default.psml/media-type/html?action=portlets.DCFileAction&eventSubmit_doGetdcdetails=&fileid=22824" title="Página de download do SNX" target="_blank" rel="noopener noreferrer">snx aqui</a>.

- Dê permissão de execução ao script baixado. Verifique o nome do script baixado no comando e troque, se necessário:

    ```
    sudo chmod + x snx snx_install_linux30.sh
    ```
    
- Instale o snx. Verifique o nome do script baixado no comando e troque, se necessário: 

    ```
    sudo ./snx_install_linux30.sh
    ```

- Conecte-se com o comando:

    ```
    snx -s sua.vpn.aqui.com.br -u seu_usuario_aqui
    ```

- Desconecte-se da vpn com o comando:

    ```
    snx -d
    ```


