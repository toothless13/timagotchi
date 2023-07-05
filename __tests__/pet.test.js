const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    
    it('sets the name property',() => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    
    it('has an age property', () => {
        const pet = new Pet('Fido');

        expect(typeof pet.age).toBe('number');
        expect(pet.age).toBe(0);
    });
    
    it('has a hunger property initially set to 0', () => {
        const pet = new Pet('Fido');

        expect(typeof pet.hunger).toBe('number');
        expect(pet.hunger).toBe(0);
    });

    it('has a fitness property initially set to 10', () => {
        const pet = new Pet('Fido');

        expect(typeof pet.fitness).toBe('number');
        expect(pet.fitness).toBe(10);
    });
});

describe('growUp', () => {
    it('has a growUp method that increases age by 1', () => {
        const pet = new Pet('Fido');
        // The next line tested if growUp() was defined and returned a value
        // expect(pet.growUp()).toBeDefined();
        pet.growUp();
        expect(pet.age).toBe(1);
    });

    it('adds 5 to hunger property and subtracts 3 from fitness property when growUp is called', () => {
        const pet = new Pet('Fido');

        pet.growUp();
        expect(pet.hunger).toBe(5);
        expect(pet.fitness).toBe(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4 when walk is called', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toBe(8);
    });

    it('doesn\'t allow fitness to go above 10', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toBe(10);
    });
});