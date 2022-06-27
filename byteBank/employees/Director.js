import { Employee } from "./employee.js";

export class Director extends Employee {
    constructor(name, salary, id) {
        super(name, salary, id);

        this.bonus = 1.1;
    }
}