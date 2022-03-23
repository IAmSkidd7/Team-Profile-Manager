const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const employee = new Employee('Baron', 1, 'baron@email.com');

            expect('name' in employee).toBe(true)
            expect('id' in employee).toBe(true)
            expect('email' in employee).toBe(true)
        });
    });
    describe('getName', ()=> {
        it('should return the name', () => {
            const employee = new Employee('Baron', 1, 'baron@email.com')

            expect(employee.getName()).toBe('Baron')
        });
    });
    describe('getId', ()=> {
        it('should return the id', () => {
            const employee = new Employee('Baron', 1, 'baron@email.com')

            expect(employee.getId()).toBe(1)
        });
    });
    describe('getRole', ()=> {
        it('should return the role', () => {
            const employee = new Employee('Baron', 1, 'baron@email.com')
            
            expect(employee.getRole()).toBe('Employee')
        });
    });
});