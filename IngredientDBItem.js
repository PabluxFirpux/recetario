class IngredientDBItem{
    constructor(ingredient_id, description, units) {
        this.ingredient_id = ingredient_id;
        this.description = description;
        this.units = units;
    } 

    displayInfo() {
        console.log(`${this.description}, su id es:${this.ingredient_id} y unidades:${this.units}`);
    }
}

module.exports = IngredientDBItem;