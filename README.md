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
  * POST ```"/customers/"``` - Cadastrar cliente 
  * GET ```"/customers/name/"``` - Consultar cliente pelo nome
  * GET ```"/customers/id/:id?"```- Consultar cliente pelo Id
  * DELETE ```"/customers/id/:id?"``` - Remover cliente
  * PUT ```"/customers/id/:id?"``` - Alterar o nome do cliente

