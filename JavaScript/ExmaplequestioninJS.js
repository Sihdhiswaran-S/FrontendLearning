function bankAccount() {
    let balance = 1000;
    return function (amount) {
        balance += amount;
        console.log(`Current balance:₹ ${balance}`);
    };
}
const account = bankAccount();
account(500);// Current balance:₹ 1500
account(-200);// Current balance:₹ 1300