const MAX_FITNESS = 10;
const MIN_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype = {
    growUp() {
        this.age++;
        this.hunger += 5;
        this.fitness -= 3;
    },
    walk() {
        if(this.fitness + 4 > MAX_FITNESS) {
            this.fitness = MAX_FITNESS;
        } else {
            this.fitness += 4;
        }
    },
    feed() {
        if(this.hunger - 3 < MIN_HUNGER) {
            this.hunger = MIN_HUNGER;
        } else {
            this.hunger -= 3;
        }
    }
}

module.exports = Pet;