// var express = require('express');   //inisiasi variable yang berisi express
// var router = express.Router();    // inisiasi variable yang berisi fungsi router express

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;    // export fungsi router agar module lain bisa membaca file ini

const express = require("express"); //inisiasi variable yang berisi express
const router = express.Router(); // inisiasi variable yang berisi fungsi router express
const view = require("./car");

// ------------------------------------------
router.use("/", view);

module.exports = router; // export fungsi router agar module lain bisa membaca file ini
