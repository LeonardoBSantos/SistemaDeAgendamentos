const { response } = require("express");
const express = require("express");       
const app = express();
const handlebars =  require("express-handlebars")
const bodyParser = require("body-parser")
const path = require('path');
//Model contendo a conexão com banco de dados sqlite-----------------------------------------------------------------------
const Agendamento = require('./Model/Agendamento');
      
//configurações do Handlebars-----------------------------------------------------------------------------
app.use(express.static('public'));          //aponta para a pasta public (permite o uso de estilos linkados)

app.engine('handlebars',handlebars({defaultLayout:'main', 
runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
}
}))     
app.set('view engine','handlebars');
//configurações do bodyParser-----------------------------------------------------------------------------
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())                          //Converte corpo da HTTP POST em Json

//Rotas------------------------------------------------------------------------------------------------
app.get("/lista_agendamentos", function(req,res){
    Agendamento.findAll().then(function(agendamento){
        res.render('lista_agendamentos',{agendamento: agendamento});               //Página lista de agendamentos
    });
               
})
app.get("/",function(req,res){
    res.render('Agendamento')                       //página agendamento
})
app.post("/addregistro", function(req,res){
    Agendamento.create({
        id: req.body.id,
        local: req.body.local,
        datainicio: req.body.datainicio,            //Página Adicionar agendamento
        datafim: req.body.datafim
    }).then(function(){
        res.redirect('/lista_agendamentos')
    }).catch(function(){
        res.send("Inclusão mal sucedida")
    })
})
//localhost:8080----------------------------------------------------------------------------------------
app.listen(8080);       


