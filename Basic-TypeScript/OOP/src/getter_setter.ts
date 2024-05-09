{
  //getter setter

  class Account {
    public readonly id: number;
    name: string;
    private _balance: number; //access only in this class
    protected transaction: number; //also use in child inheritance class

    constructor(
      id: number,
      name: string,
      _balance: number,
      transaction: number
    ) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
      this.transaction = transaction;
    }

    //   getter
    get balance() {
      return this._balance;
    }

    //setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  
  const personAccount = new Account(11, "Gorib", 20, 500949);
  const myBalance = personAccount.balance; //property er moto use
  console.log(myBalance);
  personAccount.deposit = 100;

 
}
