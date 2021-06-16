const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");


router.get("/", (req, res) => res.send("This is root!"));


router.post("/lambDishes", controllers.createLambDish);

router.get("/lambDishes", controllers.getAllLambDish);

router.get("/lambDishes/:id", controllers.getLambDishById);

router.post("/lambDishes/:id", controllers.updateLambDish);

router.delete("/lambDishes/:id", controllers.deleteLambDish);


router.get("/homeCountries/:id/lambDishes", controllers.getLambDishByCountry)


router.post("/homeCountries", controllers.createHomeCountry);

router.get("/homeCountries", controllers.getAllHomeCountry);

router.get("/homeCountries/:id", controllers.getHomeCountryById);

router.post("/homeCountries/:id", controllers.updateHomeCountry);

router.delete("/homeCountries/:id", controllers.deleteHomeCountry);

module.exports = router;




