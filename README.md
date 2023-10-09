# CRUD com JSON-Server

![GitHub](https://img.shields.io/github/issues/arthurritzel/crud-js-api)
![GitHub](https://img.shields.io/github/forks/arthurritzel/crud-js-api)
![GitHub](https://img.shields.io/github/stars/arthurritzel/crud-js-api)

Este repositório contém um CRUD (Create, Read, Update, Delete) simples desenvolvido em JavaScript, usando a ferramenta JSON-Server para hospedar uma RESTful API que serve como banco de dados. Este CRUD permite a criação, leitura, atualização e exclusão de recursos por meio de chamadas HTTP.

## Descrição

Este projeto é um exemplo básico de como criar um CRUD com JSON-Server. JSON-Server é uma ferramenta que permite criar rapidamente uma RESTful API com um banco de dados simulado em formato JSON. É útil para desenvolvimento e prototipagem rápida de aplicações que requerem uma API.

## Funcionalidades

O CRUD oferece as seguintes funcionalidades básicas:

- **Listar Recursos**: Visualize todos os recursos existentes no banco de dados.

- **Adicionar Recursos**: Crie novos recursos adicionando dados à API.

- **Atualizar Recursos**: Edite informações de recursos existentes.

- **Excluir Recursos**: Remova recursos do banco de dados.

## Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager) instalado

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/arthurritzel/crud-js-api.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd crud-js-api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

1. Inicie o JSON-Server para simular o servidor de banco de dados:

   ```bash
   npx json-server --watch db.json
   ```

2. Abra seu navegador e acesse o aplicativo em [http://localhost:3000](http://localhost:3000).

Agora você pode usar o CRUD para criar, listar, atualizar e excluir recursos no banco de dados simulado.


**Desenvolvido por [Arthur Ritzel]**
