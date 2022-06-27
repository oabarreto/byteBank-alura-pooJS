export class Employee {
    constructor(name, salary, id) {
        this._name;
        this._salary;
        this._id;

        this.bonus = 1;
        this._password;
    }

    authenticate (password) {
        return password == this._password;
    }

    registerPassword(password){
        this._password = password;
    }
}