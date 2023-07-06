const Pet = require('../src/pet');
const error = new Error('Your pet is no longer alive :(');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Kaido')).toBeInstanceOf(Object);
    });
    
    it('sets the name property',() => {
        const kaido = new Pet('Kaido');

        expect(kaido.name).toEqual('Kaido');
    });
    
    it('has an age property', () => {
        const kaido = new Pet('Kaido');

        expect(typeof kaido.age).toBe('number');
        expect(kaido.age).toBe(0);
    });
    
    it('has a hunger property initially set to 0', () => {
        const kaido = new Pet('Kaido');

        expect(typeof kaido.hunger).toBe('number');
        expect(kaido.hunger).toBe(0);
    });

    it('has a fitness property initially set to 10', () => {
        const kaido = new Pet('Kaido');

        expect(typeof kaido.fitness).toBe('number');
        expect(kaido.fitness).toBe(10);
    });
});

describe('growUp', () => {
    it('has a growUp method that increases age by 1', () => {
        const kaido = new Pet('Kaido');
        // The next line tested if growUp() was defined and returned a value
        // expect(kaido.growUp()).toBeDefined();
        kaido.growUp();
        expect(kaido.age).toBe(1);
    });

    it('adds 5 to hunger property and subtracts 3 from fitness property when growUp is called', () => {
        const kaido = new Pet('Kaido');

        kaido.growUp();
        expect(kaido.hunger).toBe(5);
        expect(kaido.fitness).toBe(7);
    });
});

describe('walk', () => {
    const kaido = new Pet('Kaido');

    it('increases fitness by 4 when walk is called', () => {
        kaido.fitness = 4;
        kaido.walk();
        expect(kaido.fitness).toBe(8);
    });

    it('doesn\'t allow fitness to go above 10', () => {
        kaido.growUp();
        kaido.walk();
        kaido.walk();
        expect(kaido.fitness).toBe(10);
    });
});

describe('feed', () => {
    const kaido = new Pet('Kaido');

    it('decreases hunger by 3 when feed is called', () => {
        kaido.hunger = 9;
        kaido.feed();
        expect(kaido.hunger).toBe(6);
    });

    it('doesn\'t allow hunger to go below 0', () => {
        kaido.hunger = 2;
        kaido.feed();
        expect(kaido.hunger).toBe(0);
    })
});

describe('checkUp', () => {
    const kaido = new Pet('Kaido');

    it('returns \'I am hungry AND I need a walk\' when fitness is 3 or less and hunger is 5 or more', () => {
        kaido.fitness = 3;
        kaido.hunger = 5;
        expect(kaido.checkUp()).toBe('I am hungry AND I need a walk');
        kaido.fitness = 2;
        kaido.hunger = 6;
        expect(kaido.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('returns \'I need a walk\' when fitness is 3 or less', () => {
        kaido.fitness = 3;
        kaido.hunger = 0;
        expect(kaido.checkUp()).toBe('I need a walk');
        kaido.fitness = 2;
        expect(kaido.checkUp()).toBe('I need a walk');
    });

    it('returns \'I am hungry\' when hunger is 5 or more', () => {
        kaido.fitness = 4;
        kaido.hunger = 5;
        expect(kaido.checkUp()).toBe('I am hungry');
        kaido.hunger = 6;
        expect(kaido.checkUp()).toBe('I am hungry');
    });

    it('returns \'I feel great!\' when fitness is over 3 and hunger is under 5', () => {
        kaido.fitness = 4;
        kaido.hunger = 4;
        expect(kaido.checkUp()).toBe('I feel great!');
        kaido.fitness = 10;
        kaido.hunger = 0;
        expect(kaido.checkUp()).toBe('I feel great!');
    });

    it('returns \'Your pet is no longer alive :(\' if your pet has passed away', () => {
        kaido.age = 30;
        expect(kaido.checkUp()).toBe('Your pet is no longer alive :(');
    });
});

describe('isAlive', () => {
    const kaido = new Pet('Kaido');

    it('returns true if fitness is greater than 0, hunger is less than 10 and age is less than 30', () => {
        expect(kaido.isAlive).toBe(true);
    });

    it('returns false if fitness is 0 or less', () => {
        kaido.fitness = 0;
        expect(kaido.isAlive).toBe(false);
        kaido.fitness = -1;
        expect(kaido.isAlive).toBe(false);
    });

    it('returns false if hunger 10 or over', () => {
        kaido.fitness = 1;
        kaido.hunger = 10;
        expect(kaido.isAlive).toBe(false);
        kaido.hunger = 11;
        expect(kaido.isAlive).toBe(false);
    });

    it('returns false if age is 30 or over', () => {
        kaido.hunger = 8;
        kaido.age = 30;
        expect(kaido.isAlive).toBe(false);
        kaido.age = 31;
        expect(kaido.isAlive).toBe(false);
    });
});

describe('errors', () => {
    const kaido = new Pet('Kaido');
    kaido.age = 30;
    it('throws an error when using growUp function if pet is not alive', () => {
        expect(() => {
            kaido.growUp()
        }).toThrow(error);
    });
    it('throws an error when using feed function if pet is not alive', () => {
        expect(() => {
            kaido.feed()
        }).toThrow();
    });
    it('throws an error when using walk function if pet is not alive', () => {
        expect(() => {
            kaido.walk()
        }).toThrow();
    });
});