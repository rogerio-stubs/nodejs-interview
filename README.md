# Tecnologias

* Nodejs
* PostgreSQL
* Docker


# Rodando a aplicação
* ``` docker-compose up -d ``` - Subindo as aplicações
* ``` yarn typeorm migration:run ``` - Criando as tabelas no banco


# Rotas 

* /cities
  * POST ```"cities/"``` - Cadastrar cidade
  * GET ```"cities/name/"``` - Consultar cidade pelo nome
  * GET ```"cities/uf/"``` - Consultar cidade pela UF
 
 
* /customers
  * POST ```"/customers/"```
  * GET ```"/customers/name/"```
  * GET ```"/customers/id/:id?"```
  * DELETE ```"/customers/id/:id?"```
  * PUT ```"/customers/id/:id?"```
