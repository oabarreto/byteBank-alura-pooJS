import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor (client, agency) {
        super(0, client, agency);
    }

    withdraw (value) {
        const rate = 1.01;
        return this._withdraw(value, rate);
    }
}