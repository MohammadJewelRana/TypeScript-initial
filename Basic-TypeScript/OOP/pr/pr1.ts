{
  class Person {
    constructor(
      public name: string,
      public age: number,
      private _balance: number
    ) {}

    get balance() {
      return this._balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    makePassport() {
      console.log(`This is ${this.name} passport`);
    }
    protected makeProfit() {
      console.log(`This is ${this.name} profit`);
    }
  }

  class Jewel extends Person {
    constructor(
      name: string,
      age: number,
      public pin: number,
      _balance: number
    ) {
      super(name, age, _balance);
      this.pin = pin;
    }
  }

  const jewel1 = new Jewel("jewel", 24, 25800, 200);
  console.log(jewel1);
  jewel1.makePassport();
  console.log("balance is : ", jewel1.balance);
  jewel1.deposit = 200;
  console.log("balance is : ", jewel1.balance);


  



}
