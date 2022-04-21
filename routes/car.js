// var express = require('express');
// var router = express.Router();

// /* GET car listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const express = require("express"); //inisiasi variable yang berisi express
const router = express.Router(); // inisiasi variable yang berisi fungsi router express
const { list, create, update } = require("../controller/carViewController");

// ------------------------------------------

router.get("/", list);
router.get("/create", create);
router.get("/update", update);

// catch 404
router.use("/", list);

module.exports = router; // export fungsi router agar module lain bisa membaca file ini
