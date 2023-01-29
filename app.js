//----------REQUERIMIENTOS-------------------------------------
const express = require("express"); //Traigo la libreria express
const app = express(); //Utilizo express
const path = require("path"); //traigo path
/*const methodOverride = require('method-override'); //utilizar el metodo put y delete 
const session = require('express-session');
const cookieParser = require("cookie-parser");
const multer= require("multer");
const {check} = require("express-validator");
const cors = require('cors');
//-------------------------IMPORTACION ENRUTADORES------------------------------------------------------
const productsRouter = require("./src/routes/productosRouters"); //se trae el enrutador
const usersRouters = require("./src/routes/usersRouters"); //se trae el enrutador

//----------------MIDDLEWARES-----------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, './public')));//vuelve publica la carpeta public
app.use(express.urlencoded({extended:false})); // utilizar el metodo POST
app.use(express.json()); // utilizar el mtodo post
app.use(methodOverride('_method')); //utilizar el metodo put y delete 
app.use(session( {secret: "Este es mi secreto"} )); 
app.use(cookieParser());
app.use(cors());
// app.use(auditoriaUnoMiddleware); //utilizo middleware
app.get('/cookie',function(req, res){
  res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
});*/
app.use(express.static(path.resolve(__dirname, './public')));//vuelve publica la carpeta public
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"/src/views/inicio.ejs"))
});
app.listen(300,()=>console.log("server corriendo"));
