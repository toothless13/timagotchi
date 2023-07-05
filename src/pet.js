function Pet(name) {
    this.name = name;
    this.age = 0;
}

Pet.prototype = {
    growUp() {
        this.age++;
    }
}

module.exports = Pet;