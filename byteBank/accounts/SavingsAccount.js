import { Account } from "./Account.js";

export class SavingsAccount extends Account {
    constructor(initialBalance, client, agency) {
        super(initialBalance, client, agency);
    }

    withdraw(value) {
        const rate = 1.02;
        return this._withdraw(value, rate);
    };
}