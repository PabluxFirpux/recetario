const IngredientDBItem = require('./IngredientDBItem.js');
const jsonHandler = require('./jsonHandler.js');




let patata = new IngredientDBItem("patata", "Patata africana", "g");
patata.displayInfo();
jsonHandler.readFileAsObject("patata.json")