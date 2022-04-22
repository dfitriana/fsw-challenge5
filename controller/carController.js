const { cars } = require("../models");

module.exports = class {
  static addCars(req, res, next) {
    cars.create({
		name: req.body.name,
		rentPrice: req.body.rentPrice,
		type: req.body.type,
		image: req.body.image
    }).then((result) => {
		res.render("cars/createCar", { result });
    // res.send({data: result});
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  static getAllCars(req, res, next) {
    cars.findAll()
      .then((result) => {
        res.render("cars/index", { ListCars : result });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static editCars(req, res, next) {
    const id = req.params.id;
    cars.findByPk(id)
      .then((result) => {
        console.log(result)
          res.render("cars/updateCar",{data:result});
          // res.status(200).send(
          //   {data : result}
          // )
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static updateCars(req, res, next) {
    const id = req.params.id;
    cars.update(req.body, {
      where: { id: id },
    }).then((result) => {
      if (result == 1) {
        res.redirect(`${id}`);
        // res.status(200).send(
        //   {data : result}
        // )
      } else {
        res.send({
          message: `cannot update id=${id}`,
        });
      }
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  static deleteCars(req, res, next) {
    const id = req.params.id;
    cars.destroy({
      where: { id: id },
    }).then((result) => {
        if (result == 1) {
          res.redirect("/");
        } else {
          res.send({
            message: `cannot delete id=${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
};
