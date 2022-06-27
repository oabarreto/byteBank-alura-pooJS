import {Client} from "./Client.js";
import {CheckingAccount} from "./accounts/CheckingAccount.js";
import {SavingsAccount} from "./accounts/SavingsAccount.js";
import {Manager} from "./employees/Manager.js";
import {Director} from "./employees/Director.js";
import {AuthenticationSystem} from "./AuthenticationSystem.js";

function createId() {
    return Math.floor(Math.random() * 9999);
}

const director = new Director("Tom fint", 8000, createId());
director.registerPassword("123456");

const manager = new Manager("George Jay", 5000, createId());
manager.registerPassword("123");

const client = new Client ("John", createId(), "456");

const managerIsLogged = AuthenticationSystem.login(manager, "123");
const clientIsLogged = AuthenticationSystem.login(client, "456");

 console.log(managerIsLogged, clientIsLogged);