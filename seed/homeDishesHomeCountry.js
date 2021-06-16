const db = require("../db");
const LambDish = require("../models/lambDish");
const HomeCountry = require("../models/homeCountry");

db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
  const homeCountry1 = await new HomeCountry(
    {
      name: "Ireland",
      country_flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"
    }
  );
  homeCountry1.save();

  const homeCountry2 = await new HomeCountry(
    {
      name: "Russia",
      country_flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
    }
  );
  homeCountry2.save();

  const homeCountry3 = await new HomeCountry(
    {
      name: "France",
      country_flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
    }
  );
  homeCountry3.save();

  const homeCountry4 = await new HomeCountry(
    {
      name: "South Korea",
      country_flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
    }
  );
  homeCountry4.save();

  const homeCountry5 = await new HomeCountry(
    {
      name: "Colombia",
      country_flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
    }
  );
  homeCountry5.save();

  const lambDishes = [
    {
      name_of_dish: "Guinness Lamb Stew with Vegetables",
      home_country: homeCountry1._id,
      ingredients: "3 pounds lamb shoulder, well-trimmed and cut into 1-1/2-inch pieces 2 teaspoons salt 1 teaspoon freshly ground black pepper 3 tablespoons vegetable or olive oil 2 medium yellow onions, cut into 1-1/2-inch 6 cloves garlic, peeled and smashed 3 tablespoons tomato paste 1/4 cup all-purpose flour 1 cup Guinness 3 cups beef broth 2 cups water, plus 2 tablespoons more for cooking onions and garli 1 bay leaf 1 small sprig fresh rosemary 2 teaspoons sugar 4 large carrots, peeled and cut into 1-inch chunks on diagonal 1 pound small white boiling potatoes (baby yukons), cut in half 1 cup frozen green peas",
      img: "https://www.onceuponachef.com/images/2012/03/guinness-lamb-stew-1-760x568.jpg",
    },
    {
      name_of_dish: "Russian Lamb Pilaf (Plov)",
      home_country: homeCountry2._id,
      ingredients: "2 ounces/50 g raisins 4 ounces/115 g pitted prunes 1 tablespoon/15 ml fresh lemon juice 1 ounce/25 g butter 1 large onion (chopped) 1 pound/450 g boneless lamb (trimmed and cut into 1/2-inch/1-cm cubes) 8 ounces/225 g lean ground lamb 2 garlic cloves (crushed) 2 1/2 cups/600 ml lamb stock (or vegetable stock) 2 cups/350 g long-grain white rice (rinsed and drained) Large pinch saffron Salt and pepper (to taste) Garnish: flat-leaf parsley",
      img: "https://www.thespruceeats.com/thmb/eZ-7MdTh2TqMLplr9Lpgbfn9Llw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1254456365-cf480b0d59484d6c9c4f44a5d3d6310f.jpg",
    },
    {
      name_of_dish: "Le Gigot D’Agneau Pascal (French Roast Leg of Lamb)",
      home_country: homeCountry3._id,
      ingredients: "5-6 lb leg of lamb, bone in 5-7 garlic cloves, cut into slivers 2 large fresh rosemary sprigs Salt Pepper Olive oil",
      img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/03/French-Easter-Leg-of-Lamb-Rosemary-and-Garlic-8053-1.jpg.webp",
    },
    {
      name_of_dish: "KOREAN LAMB CHOPS WITH GRILLED SCALLIONS",
      home_country: homeCountry4._id,
      ingredients: "8 American Lamb Loin Chops 3 tablespoons soy sauce 2 tablespoons mirin 2 tablespoons brown sugar 2 teaspoons sesame oil 1 teaspoon onion powder 1/2 teaspoon garlic powder 1/2 teaspoon ginger powder 3/4 cup plus 1 tablespoon water 1 tablespoon cornstarch 2 bunches scallions 1 tablespoon canola oil Kosher salt Sesame seeds, for garnish Chopped cilantro or parsley, for garnish",
      img: "https://sharedappetite.com/wp-content/uploads/2018/08/korean-lamb-chops-grilled-scallions-9-683x1024.jpg",
    },
    {
      name_of_dish: "COLOMBIAN BEEF STEW (CARNE GUISADA)",
      home_country: homeCountry5._id,
      ingredients: "2 tablespoons vegetable oil 1 1/4 pounds stew beef 3 cups chopped ripe tomatoes (about 4 tomatoes) 2 cups chopped yellow onion (about 2 medium onions) 4 tablespoons minced garlic 3/4 teaspoon ground cumin 1/2 teaspoon ground cayenne pepper 2 cups beef broth 1 tablespoons white vinegar 1 pound baby red potatoes, cut into uniform bite-sized pieces",
      img: "https://thewanderlustkitchen.com/wp-content/uploads/2015/03/carne-guisada-colombian-beef-stew-1.jpg",
    }
  ]

  await LambDish.insertMany(lambDishes);

  console.log("created all lamb dishes")
};


const run = async () => {
  await main();
  db.close();
}

run();