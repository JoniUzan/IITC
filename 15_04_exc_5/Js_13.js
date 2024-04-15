const elementAddition = document.querySelector(".addition");
const elementSubtraction = document.querySelector(".subtraction");
const elementMultiply = document.querySelector(".multiply");
const elementDivision = document.querySelector(".division");
let elementResult = document.querySelector(".result");
let actionButtonCheck = 0;
let num1 = 0;
let num2 = 0;
let action = "";
let save_result = 0;

function resultToZero() {
  elementResult.innerText = "";
}
function addNumber_1() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "1";
}
function addNumber_2() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "2";
}
function addNumber_3() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "3";
}
function addNumber_4() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "4";
}
function addNumber_5() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "5";
}
function addNumber_6() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "6";
}
function addNumber_7() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "7";
}
function addNumber_8() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "8";
}
function addNumber_9() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "9";
}
function addNumber_0() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += "0";
}
function addPoint() {
  resultReset();
  actionButtonColorReset();
  elementResult.innerText += ".";
}

function additionButton() {
  num1 = parseFloat(elementResult.innerText);
  if (actionButtonCheck) {
    actionButtonColorReset();
  }
  actionButtonCheck = 1;
  elementAddition.style.backgroundColor = "rgb(252, 227, 141)";
  elementAddition.style.border = "3px solid rgb(239, 101, 55)";
  elementAddition.style["box-shadow"] = "inset 4px 4px rgb(254, 235, 168)";
  action = "+";
}
function subtractionButton() {
  num1 = parseFloat(elementResult.innerText);
  if (actionButtonCheck) {
    actionButtonColorReset();
  }
  actionButtonCheck = 1;
  elementSubtraction.style.backgroundColor = "rgb(252, 227, 141)";
  elementSubtraction.style.border = "3px solid rgb(239, 101, 55)";
  elementSubtraction.style["box-shadow"] = "inset 4px 4px rgb(254, 235, 168)";
  action = "-";
}
function multiplyButton() {
  num1 = parseFloat(elementResult.innerText);
  if (actionButtonCheck) {
    actionButtonColorReset();
  }
  actionButtonCheck = 1;
  elementMultiply.style.backgroundColor = "rgb(252, 227, 141)";
  elementMultiply.style.border = "3px solid rgb(239, 101, 55)";
  elementMultiply.style["box-shadow"] = "inset 4px 4px rgb(254, 235, 168)";
  action = "*";
}
function divisionButton() {
  num1 = parseFloat(elementResult.innerText);
  if (actionButtonCheck) {
    actionButtonColorReset();
  }
  actionButtonCheck = 1;
  elementDivision.style.backgroundColor = "rgb(252, 227, 141)";
  elementDivision.style.border = "3px solid rgb(239, 101, 55)";
  elementDivision.style["box-shadow"] = "inset 4px 4px rgb(254, 235, 168)";
  action = "/";
}
function printResult() {
  num2 = parseFloat(elementResult.innerText);
  save_result = eval(`${num1}${action}${num2}`);
  elementResult.innerText = save_result;
}

function actionButtonColorReset() {
  elementAddition.style.backgroundColor = "rgb(95, 203, 52)";
  elementAddition.style.border = "3px solid rgb(72, 72, 72)";
  elementSubtraction.style.backgroundColor = "rgb(95, 203, 52)";
  elementSubtraction.style.border = "3px solid rgb(72, 72, 72)";
  elementMultiply.style.backgroundColor = "rgb(95, 203, 52)";
  elementMultiply.style.border = "3px solid rgb(72, 72, 72)";
  elementDivision.style.backgroundColor = "rgb(95, 203, 52)";
  elementDivision.style.border = "3px solid rgb(72, 72, 72)";
}
actionButtonColorReset();
function resultReset() {
  if (actionButtonCheck > 0) {
    elementResult.innerText = "";
    actionButtonCheck = 0;
  }
}
