const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// var n, k, result
// var arr = []

// rl.question("Please Enter Array Length", function (arraylength) {
//     rl.question("Plese Enter Dividing Value", function (divideBy) {
//         console.log(arraylength)
//         n = arraylength;
//         k = divideBy
//         rl.question("Plese Enter array Value", function (arrayValue) {
//             let split = arrayValue.split(',');
//             arr = new Array(n)
//             arr = split
//             result = (arr[n - k] * arr[n - k]) - (arr[0] * arr[0])
//             rl.close();
//         });
//     });
// });

// rl.on("close", function () {
//     console.log("\nBYE BYE !!!", result);
//     process.exit(0);
// });


let total, depositedAmount, bonusAmount

let winningAmount;

function Deposit(amount) {
    depositedAmount += amount;
    total += amount;
}

function Bonus(amount) {
    bonusAmount += amount;
    total += amount;
}

function win(amount) {
    winningamount += amount;
    total += amount;
}

function buyService(price, discount) {
    var actualDeposit = depositedAmount;
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
    return 0;
}

var depositeValue, bonusValue, winValue, buyAmountValue, percentageDiscountValue

rl.question("Add some money!!!", function (Deposit) {

    rl.question("Add some bonus!!!", function (Bonus) {

        rl.question("Add some winamount!!!", function (win) {


            rl.question("Add some buy amount!!!", function (buyAmount) {

                rl.question("Add some buy amount!!!", function (percentageDiscount) {
                    depositeValue = Deposit;
                    bonusValue = Bonus;
                    winValue = win;
                    buyAmountValue = buyAmount;
                    percentageDiscountValue = percentageDiscount;
                });
            })
        })
    })
});
Deposit(depositeValue);
Bonus(bonusValue);
win(winValue);



if (buyService(buyAmountValue, percentageDiscountValue) == 0) {
    console.log("You Dn't have enough money")
    rl.close();
} else
    console("You bought the service. You now have " << mywallet.total << " in your wallet."); {
    rl.close();
    return 0;
}
