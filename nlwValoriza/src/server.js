"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//@types/express
var app = express_1.default();
/**
 * get => utilizado para buscar uma informacao dentro da api
 * post => utilizado para inserir ou criar alguma informacao dentro da api
 * put => utilizado para alterar alguma informacao dentro da api
 * delete => utilizado para deletar alguma informação dentro da api
 * path => utilizado para alterar uma informacao especifica, um campo especifico
 */
app.get("/test", function (request, response) {
    //request => entrando
    //response => saindo
    return response.send("Ola NLW get");
});

app.post("/test-post", function (request, response) {
    return response.send("Ola NLW post");
});
//http://localhost:3000
app.listen(3000, function () { return console.log("Server is running NLW"); });
