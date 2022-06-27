
// Abstract Class

export class Account {
    
    constructor(initialBalance, client, agency) {
        this._balance = initialBalance;
        this._client = client;
        this._agency = agency;

        if (this.constructor === Account) {
            throw new Error ("Directly instantiating an object of type account is invalid");
        }
    }

    set client(newValue){
        if(newValue instanceof Client){
            this._client = newValue;
        }
    };

    get client(){
        return this._client;
    };

    get balance(){
        return this._balance;
    };

    withdraw(value) {
        throw new Error("This method is abstract");
    };

    _withdraw(value, rate) {
        
        const withdrawnAmount = rate * value;

        if (this._balance >= withdrawnAmount) {
            this._balance -= withdrawnAmount;
            return withdrawnAmount;
        }

        return 0;
    }

    deposit(value) {
        if (value <= 0) {
            return
        }
        this._balance += value;
    };

    transfer(value, account) {
        const withdrawnAmount = this.withdraw(value);
        account.deposit(withdrawnAmount);
    }
}