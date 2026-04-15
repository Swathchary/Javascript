

let btnadd = document.getElementById("btn_add");
let btnsub = document.getElementById("btn_sub");

let btnMultly = document.getElementById("btn_Multi");

let add_result = document.getElementById("display_add_results");
let sub_result = document.getElementById("display_sub_results");

let Multi_result = document.getElementById("display_Multi_results");


btnMultly.addEventListener("click", () => {

    let first_num = document.getElementById("num1").value
    let second_num = document.getElementById("num2").value


    let total_multi = Number(first_num) * Number(second_num);

    Multi_result.innerText = "Muitiplication : " + total_multi;



});


btnsub.addEventListener("click", () => {

    let first_num = document.getElementById("num1").value
    let second_num = document.getElementById("num2").value


    let total_sub = Number(first_num) - Number(second_num);

    sub_result.innerText = "Subtraction : " + total_sub;

});

btnadd.addEventListener("click", () => {

    console.log("aftervalue", "enter here");
    let first_num = document.getElementById("num1").value
    let second_num = document.getElementById("num2").value

    let total = Number(first_num) + Number(second_num);

    add_result.innerText = "Addition : " + total;

});
