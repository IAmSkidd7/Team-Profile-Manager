const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const intern = new Intern('Mandy', 2, 'mandy@email.com');

            expect('name' in intern).toBe(true)
            expect('id' in intern).toBe(true)
            expect('email' in intern).toBe(true)
        });
    });
    describe('getName', ()=> {
        it('should return the name', () => {
            const intern = new Intern('Mandy', 2, 'mandy@email.com')

            expect(intern.getName()).toBe('Mandy')
        });
    });
    describe('getId', ()=> {
        it('should return the id', () => {
            const intern = new Intern('Mandy', 2, 'mandy@email.com')

            expect(intern.getId()).toBe(2)
        });
    });
    describe('getRole', ()=> {
        it('should return the role', () => {
            const intern = new Intern('Mandy', 2, 'mandy@email.com')

            expect(intern.getRole()).toBe('Intern')
        });
    });
    describe('getEmail', ()=> {
        it('should return the email', () => {
            const intern = new Intern('Mandy', 2, 'mandy@email.com')

            expect(intern.getEmail()).toBe('mandy@email.com')
        });
    });
});