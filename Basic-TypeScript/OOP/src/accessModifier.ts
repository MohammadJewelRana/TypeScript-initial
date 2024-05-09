{
  //access modifier

  class Account {
    public readonly id: number;
    name: string;
    private _balance: number;//access only in this class
    protected transaction:number;//also use in child inheritance class

    constructor(id: number, name: string, _balance: number,transaction:number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
      this.transaction = transaction;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }


  class StudentsAccount extends Account{
    test(){
        this.transaction
    }
  }


  const personAccount = new Account(11, "Gorib", 20,500949);

  personAccount.addDeposit(20);
  personAccount.getBalance();
}
