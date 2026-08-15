const IngredientDBItem = require('./IngredientDBItem.js');
const IngredientDataBase = require('./IngredientDataBase.js');
const RecipeIngredient = require('./RecipeIngredient.js');
const Recipe = require('./Recipe.js');
const jsonHandler = require('./jsonHandler.js');
const prompting = require('./prompting.js');


function main() { 
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
        switch(x) {
            case "1": console.log("Nueva receta fabricandose"); break;
            case "2": console.log("Boveda de recetas: "); break;
            case "3": console.log("Lista de ingredientes: "); break;
        }
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

function testRecipeItemText() {
    const DB = new IngredientDataBase();
    let aove = new IngredientDBItem("aove", "Aceite de Oliva Virgen Extra", "ml");
    DB.addIngredient(aove);

    let ing1 = new RecipeIngredient("aove", 300);
    let ing2 = new RecipeIngredient("nachos", 300);

    console.log(ing1.getText(DB));
    console.log(ing2.getText(DB));
    
}

function testRecipe() {
    const DB = new IngredientDataBase();
    let aove = new IngredientDBItem("aove", "Aceite de Oliva Virgen Extra", "ml");
    DB.addIngredient(aove);

    let ing1 = new RecipeIngredient("aove", 300);
    let ing2 = new RecipeIngredient("nachos", 300);
    let name = "Nachos con aceite";
    let ingredientes = [
        ing1,
        ing2
    ];
    let procedimiento = [
        "Mezclar ingredientes",
        "Rezar a jesucristo"
    ]
    let Receta = new Recipe(name, ingredientes, procedimiento);
    Receta.printRecipe(DB);
    jsonHandler.writeObjectAsFile("Receta.json", Receta);

}

console.log(process.argv.slice(2))
//promptTest();