const IngredientDBItem = require('./IngredientDBItem.js');
const IngredientDataBase = require('./IngredientDataBase.js');
const jsonHandler = require('./jsonHandler.js');
const prompting = require('./prompting.js');


function main() {    
        
    let patata = new IngredientDBItem("patata", "Patata africana", "g");
    patata.displayInfo();
    let regurgitada_Patata = jsonHandler.readFileAsObject("patata.json");
    console.log(regurgitada_Patata.ingredient_id);
    let respuesta = prompting.getNumberFromUser("Numero fav? ");
    console.log(respuesta);
}

function promptTest() {
    const opt = [
        "Nueva receta",
        "Ver boveda",
        "Ver lista de ingredientes"
    ]
    prompting.menu(opt,(x) => {
        console.log("Done, you chose: " + x);
    })
}

function testDB() {
    let patata = new IngredientDBItem("patata", "Patata africana", "g");
    let tomate = new IngredientDBItem("tomate", "Tomate de Ensalada", "g");
    let aove = new IngredientDBItem("aove", "Aceite de Oliva Virgen Extra", "ml");
    const DB = new IngredientDataBase();
    DB.addIngredient(patata);
    DB.addIngredient(tomate);
    DB.addIngredient(aove);
    //jsonHandler.writeObjectAsFile("ingredients.json", DB);
    const fil = jsonHandler.readFileAsObject("ingredients.json");
    console.log(fil.ingredients == DB.ingredients);
    console.log(fil.ingredients);
}



console.log(process.argv.slice(2))
testDB();