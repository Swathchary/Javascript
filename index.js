
console.log("hiii");

function multi(a, b, c) {

    console.log(a * b * c);
}

function squre(a) {
    console.log(a * a);
}

function evenorodd(a) {
    if (a % 2 == 0) {
        return "even";

    } else {
        return "odd";
    }

}

multi(1, 2, 3);

squre(2);

let result = evenorodd(3);
console.log("resulttt", result);


function checkNumber(a) {

    if (a > 0) {
        return "Positive";

    } else if (a == 0) {
        return "Neutral";

    } else if (a < 0) {
        return "Negative"
    } else {
        return "NAN";
    }
}

let resultNum = checkNumber("Swa");

console.log("checkNum", resultNum);


function addMarks(t, h, e, m, s, g) {

    let sum = t + h + e + m + s + g;

    console.log("sum", sum);

    let avg = sum % 6;

    console.log("Avg", avg);

    if (avg >= 50) {
        return "PASS";
    } else (avg < 50)
    return "Fail";

}

let resultPa = addMarks(20, 20, 50, 60, 80, 60);

console.log(resultPa);


function zer(a) {

    if (a === 0) {

    } else {
        console.log(a);
    }
}


let resultzer0 = zer(2);


function down(x) {

    return;
}

let user_en = 5;
let x = 5;

for (let i = 0; i < user_en; i++) {

    x = (x - 1);

    if (x != 0) {
        console.log(x);
    } else {
        console.log("done");
    }

}

