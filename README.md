# hmcm-hackatoken-backend

a [Sails v1](https://sailsjs.com) application


### Rodar o projeto

A meneira mais simples (e recomendada) de rodar o projeto é utilizando docker e docker-compose,
entretanto ele também pode ser executado utilizando o ambiente de execução nodejs.

#### Rodando com o Docker

Nesse método todas as dependências do projeto são instaladas e gerenciadas pelo docker, inclusive banco de dados.
O arquivo de "docker-compose.yml" na raiz do projeto possui já configurado todas as variáveis de ambientes necessárias para executar o servidor no ambiente de development.
Para rodar o ambiente em produção talvez seja necessário 

1 - Instalar [Docker](https://docs.docker.com/install/) na máquina.

2 - Instalar [Docker Compose](https://docs.docker.com/compose/install/) na máquina.

3 - Clonar esse projeto em sua máquina: $ git clone https://gitlab.com/hackatoken/hmcm-hackatoken-backend.git

4 - Dentro da pasta do projeto buildar com o docker-compose: $ docker-compose build

5 - Em seguida rodar o servidor com docker-compose: $ docker-compose up

#### Documentação

A documentação básica de todos os endpoints foi feita com o [postman](https://www.getpostman.com/), baixe a [collection](https://drive.google.com/open?id=1iU64Vacbix46H3cnwY4lUMAJAYlfNWoi) 
e importe no postman para testar as requisições.
Todos os endpoints feitos estão funcionais e estão documentados no postman.

#### Estrutura do projeto

A estrutura do projeto segue os padrões do framework sails.js, para mais informações acesse a página com a [documentação oficial](https://sailsjs.com/documentation/reference).
