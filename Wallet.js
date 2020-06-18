const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let total, depositedAmount, bonusAmount , winningAmount;

rl.question("Depsite Amount in wallet!!!  ", function (Deposits) {

    rl.question("Add some bonus!!!  ", function (BonusValue) {

        rl.question("Add some winamount!!!  ", function (winValue) {


            rl.question("Please Enter your purchase amount!!!  ", function (buyAmount) {

                rl.question("Please Enter Percantage Discount!!!  ", function (percentageDiscount) {

                    Deposit(Deposits);
                    Bonus(BonusValue);
                    win(winValue);
                    var buyServices = buyService(buyAmount, percentageDiscount)

                    if (buyServices == 0) {
                        console.log("You Don't have enough money")
                        rl.close();
                    } else{
                        console.log(`You bought the service. You now have ${total} in your wallet`);

                        console.log(`You now have ${depositedAmount} in your Deposite wallet`);

                        console.log(`You now have ${bonusAmount} in your Bonus wallet`);

                        console.log(`You now have ${winningAmount} in your Win wallet`);

                        rl.close();
                        return 0;
                    }
               
                    function Deposit(amount) {
                        depositedAmount = amount;
                        total += amount;
                    }

                    function Bonus(amount) {
                        bonusAmount = amount;
                        total += amount;
                    }

                    function win(amount) {
                        winningAmount = amount;
                        total += amount;
                    }

                    function buyService(price, discount) {

                        // console.log("this is ",price,discount)
                        // console.log("this wahat salsdf",depositedAmount)
                        // console.log("this bonus",bonusAmount)
                        // console.log("this bonus",winningAmount)

                        var actualdeposit = depositedAmount;
                        var actualBonus = bonusAmount;
                        price -= (price * discount / 100);
                        if (price > 0) {
                            var bonus = price * 10 / 100;
                            bonusAmount -= bonus;
                            price -= bonus;
                        }
                        if (price > 0) {
                            if (price > depositedAmount) {
                                price -= depositedAmount;
                                depositedAmount = 0;
                                if (price > winningAmount) {
                                    depositedAmount = actualdeposit;
                                    bonusAmount = actualBonus;
                                    return 1;
                                } else
                                    winningAmount -= price;
                            } else {
                                depositedAmount -= price;
                            }
                        }
                        total = depositedAmount + bonusAmount + winningAmount;
                        return total;
                    }

                });
            })
        })
    })
});
