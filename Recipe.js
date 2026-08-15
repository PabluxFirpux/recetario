class Recipe {
    constructor(name, ingredients, procedimiento) {
        this.name = name;
        this.ingredients = ingredients;
        this.procedimiento = procedimiento;
    }

    printRecipe(database) {
        console.log(`${this.name}:`);
        console.log("");
        console.log("Ingredients:");
        for (let x in this.ingredients) console.log(`   - ${this.ingredients[x].getText(database)}`);
        console.log("");
        console.log("Procedimiento:");
        for (let x in this.procedimiento) console.log(`${x}. ${this.procedimiento[x]}`);
    }
}

module.exports = Recipe;