import {Account} from './Account.js';

export class CheckingAccount extends Account {
    
    static numberOfAccounts = 0;

    constructor (client, agency) {
        super(0, client, agency);
        CheckingAccount.numberOfAccounts++;
    };

    withdraw(value) {
        let rate = 1.1;
        return this._withdraw(value, rate);
    };

}
