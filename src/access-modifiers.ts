
// class BankAccount {
//     id: number;
//     name: string;
//     // private _balance: number;
//     protected _balance: number;

//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }

//     getBalance() {
//        console.log(`My Current Balance is: ${this._balance}`);
//     }

//     addDeposit (amount: number) {
//         this._balance += amount;
//         console.log(`Deposit Amount: ${amount}`);
//         this.getBalance();
//     }
// }

// const myAccount = new BankAccount(934, 'Imran', 2000);
// console.log(myAccount);