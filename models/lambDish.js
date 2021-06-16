const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lambDish = new Schema(
  {
    name_of_dish: { type: String, required: true },
    home_country: { type: Schema.Types.ObjectId, ref: "home_countries" },
    ingredients: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("lamb_dishes", lambDish);