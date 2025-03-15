let input_data = document.getElementById("input_data");

let btn_1 = document
  .getElementById("btn_1")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "1";
  });
let btn_2 = document
  .getElementById("btn_2")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "2";
  });
let btn_3 = document
  .getElementById("btn_3")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "3";
  });
let btn_4 = document
  .getElementById("btn_4")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "4";
  });
let btn_5 = document
  .getElementById("btn_5")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "5";
  });
let btn_6 = document
  .getElementById("btn_6")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "6";
  });
let btn_7 = document
  .getElementById("btn_7")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "7";
  });
let btn_8 = document
  .getElementById("btn_8")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "8";
  });
let btn_9 = document
  .getElementById("btn_9")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "9";
  });
let btn_0 = document
  .getElementById("btn_0")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "0";
  });
let btn_Plu = document
  .getElementById("btn_+")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "+";
  });
let btn_Mul = document
  .getElementById("btn_*")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "*";
  });
let btn_Div = document
  .getElementById("btn_/")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "/";
  });
let btn_Sub = document
  .getElementById("btn_-")
  .addEventListener("click", function () {
    input_data.value = input_data.value + "-";
  });
let btn_Equ = document
  .getElementById("btn_=")
  .addEventListener("click", function () {
    input_data.value = eval(input_data.value);
  });
let btn_Dot = document
  .getElementById("btn_.")
  .addEventListener("click", function () {
    input_data.value = input_data.value + ".";
  });

function clearData() {
  input_data.value = "";
}
