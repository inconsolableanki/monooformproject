const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var n, k, result
var arr = []

rl.question("Please Enter Array Length  ", function (arraylength) {
    rl.question("Plese Enter Dividing Value  ", function (divideBy) {
        n = arraylength;
        k = divideBy
        rl.question("Plese Enter array Value Seprate with comma ", function (arrayValue) {
            let split = arrayValue.split(',');
            arr = new Array(n)
            arr = split
            result = (arr[n - k] * arr[n - k]) - (arr[0] * arr[0])
            rl.close();
        });
    });
});

rl.on("close", function () {
    console.log(`\nYou Output is ${result} BYE BYE !!!`);
    process.exit(0);
});

