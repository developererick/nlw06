# nlw06
## Repositório criado durante a semana NLW da Rockeatset (desafio node.js)

-----------------------------------------------------------------------------------
Desenvolvimento de API Node com acesso a banco para controle de elogios dos colabores
aos seus pares em uma determinada empresa.
-----------------------------------------------------------------------------------

## Exemplos Tipos de requisicao http
 
  get => utilizado para buscar uma informacao dentro da api
 
  post => utilizado para inserir ou criar alguma informacao dentro da api
 
  put => utilizado para alterar alguma informacao dentro da api
 
  delete => utilizado para deletar alguma informação dentro da api
 
  path => utilizado para alterar uma informacao especifica, um campo especifico
 
-----------------------------------------------------------------------------------

 ## Tipos de parametros em requisicoes
 
 Routes params => parametros que fazem parte da nossa propria rota
 http://localhost:3000/produtos/145654546
 
 
 Query params => parametros que fazem parte de uma query, para fazer um filtro
 posso receber eles na rota ou não
 http://localhost:3000/produtos?name=teclado&description=bom
  
 Body params => sao parametros que vem no corpo da propria requisicao, exemplo um json
 
 params
 {
   "name":"teclado",
   "description":"bom"
 }

-----------------------------------------------------------------------------------

## Exemplos de request
app.get("/test",(request,response)=>{
    //request => entrando
    //response => saindo
    return response.send("Ola NLW get");
    });

app.post("/test-post",(request,response)=>{
    return response.send("Ola NLW post");
});

-----------------------------------------------------------------------------------

## Neste projeto estou utilizando o TypeORM com banco de dados SQLLite
yarn add typeorm reflect-metadata sqlite3

-----------------------------------------------------------------------------------

## Regras
-Cadastro de usuário

 [] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
 
 [] Não é permitido cadastrar usuario sem e-mail

-Cadastro de TAG

 [] Não é permitido cadastrar mais de uma tag com o mesmo nome e

 [] Não é permitido cadastrar tag sem nome

 [] Não é permitido cadastrar tag por usuários que não sejam administradores

 -Cadastro de Elogios

 [] Não é permitido um usuário cadastrar um elogio para si mesmo

 [] Não é permitido cadastrar elogios para usuários inválidos

 [] O usuário precisa estar autenticado na aplicação



 