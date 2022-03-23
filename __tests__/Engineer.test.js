const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const engineer = new Engineer('Baron', 1, 'baron@email.com');

            expect('name' in engineer).toBe(true)
            expect('id' in engineer).toBe(true)
            expect('email' in engineer).toBe(true)
        });
    });
    describe('getName', ()=> {
        it('should return the name', () => {
            const engineer = new Engineer('Baron', 1, 'baron@email.com')

            expect(engineer.getName()).toBe('Baron')
        });
    });
    describe('getId', ()=> {
        it('should return the id', () => {
            const engineer = new Engineer('Baron', 1, 'baron@email.com')

            expect(engineer.getId()).toBe(1)
        });
    });
    describe('getRole', ()=> {
        it('should return the role', () => {
            const engineer = new Engineer('Baron', 1, 'baron@email.com')
            
            expect(engineer.getRole()).toBe('Engineer')
        });
    });
    describe('getEmail', ()=> {
        it('should return the email', () => {
            const engineer = new Engineer('Baron', 1, 'baron@email.com')

            expect(engineer.getEmail()).toBe('baron@email.com')
        });
    });
});