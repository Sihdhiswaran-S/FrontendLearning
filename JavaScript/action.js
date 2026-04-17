class Action {
  #balance = 0; // private field

  constructor(name) {
    this.name = name;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount; //this.#balance = this.#balance + amount;
      this.#viewBalance();
    } else {
      console.log("cannot add negative amount");
    }
  }
  withdraw(amount) {
    if (amount < this.#balance) {
      this.#balance -= amount;
      this.#viewBalance();

    } else {
      console.log(" insufficient funds");
    }
    console.log("without pin");
    
  }
  withdraw(amount, pin) {
    if (amount < this.#balance) {
      this.#balance -= amount;
      this.#viewBalance();
    } else {
      console.log("insufficient funds");
    }
    console.log("with pin",pin);
  }
  #viewBalance() {
    console.log(`Balance for ${this.name}: ${this.#balance}`);
  }
}
const action1 = new Action("John");
action1.deposit(1000);
action1.withdraw(500);
action1.withdraw(100,"1234");
// action1.#viewBalance();

