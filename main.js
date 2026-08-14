const IngredientDBItem = require('./IngredientDBItem.js');
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
const opt = [
    "Nueva receta",
    "Ver boveda",
    "Ver lista de ingredientes"
]

prompting.menu(opt,(x) => {
    console.log("Done, you chose: " + x);
})
console.log(process.argv.slice(2))