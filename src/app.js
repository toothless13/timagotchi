const MAX_FITNESS = 20;
const MIN_HUNGER = 0;
const error = new Error('Your pet is no longer alive :(');

class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 20;
        this.children = [];
    }
    get isAlive() {
        return this.fitness > 0 && this.hunger < 20 && this.age < 30;
    }
    growUp() {
        if(!this.isAlive) {
            // throw error;
            console.log('Your pet is no longer alive :(')
        }
        this.age++;
        this.hunger += 5;
        this.fitness -= 3;
    }
    walk() {
        if(!this.isAlive) {
            // throw error;
            console.log('Your pet is no longer alive :(')
        }
        if(this.fitness + 4 > MAX_FITNESS) {
            this.fitness = MAX_FITNESS;
        } else {
            this.fitness += 4;
        }
    }
    feed() {
        if(!this.isAlive) {
            // throw error;
            console.log('Your pet is no longer alive :(')
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
const petDiv = document.querySelector('.petScreen');
const gameButtons = document.querySelectorAll('.gameButtons');
const growUpButton = document.querySelector('.growUpButton');
const feedButton = document.querySelector('.feedButton');
const walkButton = document.querySelector('.walkButton');
// Hide the game buttons
gameButtons.forEach(button => button.style.display = 'none');
// Hide the pet screen
petDiv.style.display = 'none';

let chooseNameButton = document.querySelector('#chooseName');
chooseNameButton.addEventListener('click', () => {
    petName = window.prompt('Please enter your pet\'s name:');
    const pet = new Pet(petName);
    petDiv.innerHTML = `<p>
    Name: ${pet.name}<br>
    Age: ${pet.age}<br>
    Hunger Level: ${pet.hunger}<br>
    Fitness Level: ${pet.fitness}</p>`;
    // console.log(pet.isAlive);
    // Display the petScreen
    petDiv.style.display = 'block';
    // Display the game buttons
    gameButtons.forEach(button => button.style.display = 'flex');
    
    // Grow up functionality
    growUpButton.addEventListener('click', () => {
        pet.growUp();
        console.log(pet);
        petDiv.innerHTML = `<p>
        Name: ${pet.name}<br>
        Age: ${pet.age}<br>
        Hunger Level: ${pet.hunger}<br>
        Fitness Level: ${pet.fitness}</p>`;

        if(!pet.isAlive) {
            petDiv.innerHTML = `<p>Sadly, ${pet.name} has passed away :(</p>`;
            // Hide the game buttons
            gameButtons.forEach(button => button.style.display = 'none');
        }
    });
    // Feed functionality
    feedButton.addEventListener('click', () => {
        pet.feed();
        petDiv.innerHTML = `<p>
        Name: ${pet.name}<br>
        Age: ${pet.age}<br>
        Hunger Level: ${pet.hunger}<br>
        Fitness Level: ${pet.fitness}</p>`;
    });
    // Walk functionality
    walkButton.addEventListener('click', () => {
        pet.walk();
        petDiv.innerHTML = `<p>
        Name: ${pet.name}<br>
        Age: ${pet.age}<br>
        Hunger Level: ${pet.hunger}<br>
        Fitness Level: ${pet.fitness}</p>`;
    });


    console.log(pet);
    return pet;
});




console.log(petName);