const LambDish = require("../models/lambDish");
const HomeCountry = require("../models/homeCountry");

const createLambDish = async (req, res) => {
  try {
    const dish = await new LambDish(req.body);
    await dish.save();
    return res.status(201).json({ dish });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllLambDish = async (req, res) => {
  try {
    const dishes = await LambDish.find();
    return res.status(200).json({ dishes });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getLambDishById = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await LambDish.findById(id);
    if (dish) {
      return res.status(200).json({ dish });
    }
    return res.status(404).send("lamb dish not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateLambDish = async (req, res) => {
  try {
    const { id } = req.params;
    await LambDish.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, dish) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!dish) {
          res.status(500).send("lamb dish not found")
        }
        return res.status(200).json(dish);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteLambDish = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await LambDish.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("lamb dish deleted");
    }
    throw new Error("lamb dish not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const getLambDishByCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const countries = await HomeCountry.find({ home_country: id });
    return res.status(200).json({ countries });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const createHomeCountry = async (req, res) => {
  try {
    const country = await new HomeCountry(req.body);
    await country.save();
    return res.status(201).json({ country });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


const getAllHomeCountry = async (req, res) => {
  try {
    const country = await HomeCountry.find();
    return res.status(200).json({ country });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};


const getHomeCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await HomeCountry.findById(id);
    if (country) {
      return res.status(200).json({ country });  
    }
    return res.status(404).send("country not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const updateHomeCountry = async (req, res) => {
  try {
    const { id } = req.params;
    await HomeCountry.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, country) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!country) {
          res.status(500).send("country not found")
        }
        return res.status(200).json(country);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteHomeCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HomeCountry.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("country deleted");
    }
    throw new Error("country not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};



module.exports = {
  createLambDish,
  getAllLambDish,
  getLambDishById,
  updateLambDish,
  deleteLambDish,
  getLambDishByCountry,
  createHomeCountry,
  getAllHomeCountry,
  getHomeCountryById,
  updateHomeCountry,
  deleteHomeCountry
};