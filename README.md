# teste-verzel_fullstack

🛠 BackEnd Technologies

NodeJS <br />
bcryptjs <br />
express <br />
jsonwebtoken <br />
mysql <br />
uuid <br />
aws <br />


Back end feito com Node usando banco de dados mysql hospedado na AWS RDS, autenticação e token jwt. <br />
Deixei o arquivo .env com informações para o avaliador conectar ao banco com algum gerenciador de banco de dados.

Como usar BACKEND
=================

- Para executar o projeto siga as instruções:


1. Abra o terminal
2. git clone
3. cd verzel-back-end

- Instale as dependencias e execute:

3. yarn
4. yarn start

- ou

3. npm install
4. npm run dev



## BACKEND Endpoints:

### `GET` `/`

Rota que devolve a lista de carros.

### `GET` `/:id`

Rota para pegar o carro pelo id.

### `POST` `/`

Rota para adicionar um novo carro.

### `DELETE` `/:id`

rota para deletar carro pelo id

### `PUT` `/:id`

Rota para atualizar um carro pelo id

## ROTAS DE AUTENTICAÇÃO


### `POST` `/register`

Rota para registro de usúario


### `POST` `/login`

Rota para login do usúario




🛠 Front Technologies

React
typescript
axios
react-router-dom
date-fns
styles-components

Como usar FRONTEND
=================

- Para executar o projeto siga as instruções:


1. Abra o terminal
2. git clone
3. cd verzel_front-end

- Instale as dependencias e execute:

3. yarn
4. yarn start

- ou

3. npm install
4. npm run dev


## FRONTEND Endpoints:

### `/:login`

Rota usada para pagina de login e registro

### `/`

Rota usada para home com lista de carros

### `/meus-anuncios`

Rota usada para ver os próprios anúncios

### `/anunciar`

Rota para anunciar um carro

### `/editar-anuncio/:id`

Rota para editar um anúncio pelo id

### `/criar-anuncio`

Rota para criar um anúncio de carro
