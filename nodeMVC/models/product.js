const products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        // Push current object into array
        products.push(this);
    }

}