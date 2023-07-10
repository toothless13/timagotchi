const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
const error = new Error('Your pet is no longer alive :(');

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30;
    },
    growUp() {
        if(!this.isAlive) {
            throw error;
        }
        this.age++;
        this.hunger += 5;
        this.fitness -= 3;
    },
    walk() {
        if(!this.isAlive) {
            throw error;
        }
        if(this.fitness + 4 > MAX_FITNESS) {
            this.fitness = MAX_FITNESS;
        } else {
            this.fitness += 4;
        }
    },
    feed() {
        if(!this.isAlive) {
            throw error;
        }
        if(this.hunger - 3 < MIN_HUNGER) {
            this.hunger = MIN_HUNGER;
        } else {
            this.hunger -= 3;
        }
    },
    checkUp() {
        if(!this.isAlive) {
            return 'Your pet is no longer alive :(';
        } 
        if(this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk';
        }
        if(this.fitness <= 3) {
            return 'I need a walk';
        }
        if(this.hunger >= 5) {
            return 'I am hungry';
        }
        return 'I feel great!';            
    },
    adoptChild(child) {
        this.children.push(child);
    }
}

module.exports = {Pet, error};