const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
const error = new Error('Your pet is no longer alive :(');

class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = MIN_HUNGER;
        this.fitness = MAX_FITNESS;
        this.children = [];
    }
    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30;
    }
    growUp() {
        if(!this.isAlive) {
            throw error;
        }
        this.age++;
        this.hunger += 5;
        this.fitness -= 3;
    }
    walk() {
        if(!this.isAlive) {
            throw error;
        }
        if(this.fitness + 4 > MAX_FITNESS) {
            this.fitness = MAX_FITNESS;
        } else {
            this.fitness += 4;
        }
    }
    feed() {
        if(!this.isAlive) {
            throw error;
        }
        if(this.hunger - 3 < MIN_HUNGER) {
            this.hunger = MIN_HUNGER;
        } else {
            this.hunger -= 3;
        }
    }
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
    }
    adoptChild(child) {
        this.children.push(child);
    }
    haveBaby(name) {
        return this.children.push(new Pet(name));
    }
}

let petName;
let chooseNameButton = document.querySelector('#chooseName');
chooseNameButton.addEventListener('click', () => {
    petName = window.prompt('Please enter your pet\'s name:');
    const pet = new Pet(petName);
    console.log(pet);
    return pet;
});


console.log(petName);