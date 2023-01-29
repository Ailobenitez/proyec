//------------REQUERIMIENTOS-------------------------
const db = require("../database/models");
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { Association } = require("sequelize");
const { validationResult, check } = require("express-validator");

//------------OBJETO DEL CONTROLADOR------------------
const controladorProductos = {

  //------------MOSTRAR PAGINA PRINCIPAL---------------
  index: (req, res) => {
    db.Producto.findAll().then(function (producto) {
      res.render("login", { producto: producto });
    });
  },}