
class BankAccount {
    id: number;
    name: string;
    private _balance: number;
    // protected _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // <<<<<<<<<============Getter and Setter===================>>>>>>>>>>>>>>>>
    get balance(): number{
        return this._balance;
    }

    set deposit(amount:number){
        this._balance += amount;
    }

    getBalance() : number{
       return this._balance;
    }

    addDeposit (amount: number) {
        this._balance += amount;
        console.log(`Deposit Amount: ${amount}`);
        this.getBalance();
    }
}


class StudentAccount  extends BankAccount {

}

const myAccount = new BankAccount(934, 'Imran', 5000);
// myAccount.addDeposit(500);
// myAccount.getBalance();
// console.log(myAccount.getBalance());


console.log(myAccount.balance);
myAccount.deposit = 500;
console.log(myAccount.balance);