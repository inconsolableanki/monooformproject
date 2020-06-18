const readline = require("readline");
const { concatSeries } = require("async");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let total, depositedAmount, bonusAmount , winningAmount;

rl.question("Add some money!!!", function (Deposits) {

    rl.question("Add some bonus!!!", function (BonusValue) {

        rl.question("Add some winamount!!!", function (winValue) {


            rl.question("Add some buy amount!!!", function (buyAmount) {

                rl.question("Add some buy amount!!!", function (percentageDiscount) {
                    // depositeValue = Deposit;
                    // bonusValue = Bonus;
                    // winValue = win;
                    // buyAmountValue = buyAmount;
                    // percentageDiscountValue = percentageDiscount;

                    Deposit(Deposits);
                    Bonus(BonusValue);
                    win(winValue);
                    var buyServices = buyService(buyAmount, percentageDiscount)
                    console.log("this buyservices :: ",buyServices)
                    console.log("this buyservices :: ",total)
                    console.log("this buyservices :: ",winningAmount)
                    console.log("this buyservices :: ",depositedAmount)
                    console.log("this buyservices :: ",bonusAmount)




                    if (buyServices == 0) {
                        console.log("You Dn't have enough money")
                        rl.close();
                    } else{
                        console.log("You bought the service. You now have " << total << " in your wallet.");
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
