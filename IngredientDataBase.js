const IngredientDBItem = require('./IngredientDBItem.js');

class IngredientDataBase {
    constructor() {
        this.ingredients = [];
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredientList(ingredients) {
        for (let x in ingredients) {
            this.ingredients.push(ingredients[x]);
        }
    }

    getIngredientByID(ingredient_id) {
        for (let x in this.ingredients) {
            if (this.ingredients[x].ingredient_id == ingredient_id) return this.ingredients[x];
        }
        return null;
    }

    displayInfo() {
        for (let x in this.ingredients) this.ingredients[x].displayInfo();
    }
}

module.exports = IngredientDataBase;