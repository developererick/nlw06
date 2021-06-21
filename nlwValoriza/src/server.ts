import express, { request, response } from "express";

//@types/express
const app = express();

/**
 * get => utilizado para buscar uma informacao dentro da api
 * post => utilizado para inserir ou criar alguma informacao dentro da api
 * put => utilizado para alterar alguma informacao dentro da api
 * delete => utilizado para deletar alguma informação dentro da api
 * path => utilizado para alterar uma informacao especifica, um campo especifico
 */

app.get("/test",(request,response)=>{
    //request => entrando
    //response => saindo
    return response.send("Ola NLW get");
    });

app.post("/test-post",(request,response)=>{
    return response.send("Ola NLW post");
});

//http://localhost:3000
app.listen(3000,()=>console.log("Server is running NLW"));