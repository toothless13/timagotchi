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
    
    it('has a growUp method that increases age by 1', () => {
        const pet = new Pet('Fido');
        // The next line tested if growUp() was defined and returned a value
        // expect(pet.growUp()).toBeDefined();
        pet.growUp();
        expect(pet.age).toBe(1);
    });
});