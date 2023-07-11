# :bookmark: API Livraria

:label: Tecnologia Principal: Nodejs
<br> :bricks: Framework: Express.js
<br> :luggage: Banco de Dados: SQLite
<br> :test_tube: Testes Unitários: Jest
<br> :page_facing_up: Padronização: ESLint
<br> :book: Documentação: <a href='https://api.postman.com/collections/10550152-74cdf5f6-2e10-4b22-8536-9f8dbc9d415e?access_key=PMAT-01H516DX7NBHZ9ESB1A4VC2362'> Postman

## :dart: Sobre

Projeto de API REST para prática de JavaScript.
Livraria com sistema de cadastro e manejo de livros, autores e editoras.

## :building_construction: Instalação do projeto

Abrir terminal e digitar 'npm install'

### :construction: Instalação dos drivers do SQLite

- Instalar o `sqlite` globalmente no computador:
  `sudo apt update`
  `sudo apt install sqlite3`

- Verifique a instalação com:
  `sqlite3 --version`
  
- Utilize o cli do SQLite para acessar o arquivo `src/db/livraria.sqlite` e fazer consultas via terminal:
  `sqlite3 ./src/db/livraria.sqlite`.
  O terminal deverá exibir a seguinte mensagem (a data e hora do acesso serão as locais do momento em que você acessar):
  ```
  SQLite version 3.31.1 2020-01-27 19:55:54
  Enter ".help" for usage hints.
  sqlite>
  ```

- Digite os seguintes comandos no terminal do SQLite para verificar se a versão instalada tem suporte a FKs (*foreign keys*):
  ```
  PRAGMA foreign_keys;
  ```

- Deve retornar `1` se o suporte estiver habilitado e `0` se não estiver.
  Caso não esteja, insira o seguinte comando no terminal do SQLite para ativar:

  ```
  PRAGMA foreign_keys = ON;
  ```

### :test_tube: Acesso ao banco de dados

Você pode utilizar o CLI do SQLite para fazer consultas ao banco e conferir se os dados iniciais estão retornando.

* Utilize o cli do SQLite para acessar o arquivo `src/db/livraria.sqlite`: 
  `sqlite3 ./src/db/livraria.sqlite`

* Digite `.tables` para exibir as tabelas já criadas no banco:

* Digite `SELECT * FROM autores;` para exibir o conteúdo da tabela `autores`:

## :bar_chart: Rodando

### :test_tube: Exemplos de uso

Abrir terminal e digitar 'npm run dev'

#### :label: URL

http://localhost:3000

`/livros`
* `GET /livros`
* `GET /livros/:id`
* `POST /livros`
* `PUT /livros/:id`
* `DELETE /livros/:id`

`/autores`
* `GET /autores`
* `GET /autores/:id`
* `GET /autores/:id/livros`
* `POST /autores`
* `PUT /autores/:id`
* `DELETE /autores/:id`

`/editoras`
* `GET /editoras`
* `GET /editoras/:id`
* `GET /editoras/:id/livros`
* `POST /editoras`
* `PUT /editoras/:id`
* `DELETE /editoras/:id`
