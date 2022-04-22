var express = require('express');
var router = express.Router();
const CarControl = require("../controller/carController");
const { cars } = require("../models");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get("/", CarControl.getAllCars);

router.get("/cars/create", function (req, res, next) {
  res.render("cars/createCar", {title: "Add New Car"});
});
router.get("/cars/update/:id", function (req, res, next) {
  res.render("cars/updateCar", {title: "Update Car Information"});
});
router.use("/cars", require('./car'));

module.exports = router;
