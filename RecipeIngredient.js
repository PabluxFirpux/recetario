class RecipeIngredient{
    constructor(ingredient_id, quantity) {
        this.ingredient_id = ingredient_id;
        this.quantity = quantity;
    }

    getText(database) {
        let ingrediente = database.getIngredientByID(this.ingredient_id);
        if (ingrediente == null) return `${this.quantity} de ${this.ingredient_id}`;

        return `${this.quantity}${ingrediente.units} de ${ingrediente.description}`;
    }
}

module.exports = RecipeIngredient;