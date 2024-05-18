let randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let pcNumberArray = [];
let userNumberArray = [0, 1, 2, 3];
let bulls = 0;
let cows = 0;
let elemUserNum1 = document.querySelector(".userNum1");
let elemUserNum2 = document.querySelector(".userNum2");
let elemUserNum3 = document.querySelector(".userNum3");
let elemUserNum4 = document.querySelector(".userNum4");
let elembulls = document.querySelector(".bulls");
let elemcows = document.querySelector(".cows");
const elemwin = document.querySelector(".win");
const elemMemory = document.querySelector(".memory");
const elemError = document.querySelector(".error");

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

function addNumberToPcArray() {
  let rn = Math.floor(Math.random() * 10);
  let pcArrayIndex = 0;
  while (pcArrayIndex < 4) {
    for (let index = 0; index < randomArray.length; index++) {
      if (rn == randomArray[index]) {
        randomArray.splice(index, 1);
        pcNumberArray.push(rn);
        pcArrayIndex++;
      }
    }
    rn = Math.floor(Math.random() * 10);
  }

  return pcNumberArray;
}

function addToNum1() {
  if (isWin()) {
    return "win";
  }
  elemUserNum1.innerHTML = num1;
  userNumberArray[0] = num1;
  num1++;
  if (num1 > 9) {
    num1 = 0;
  }
}
function addToNum2() {
  if (isWin()) {
    return "win";
  }
  elemUserNum2.innerHTML = num2;
  userNumberArray[1] = num2;
  num2++;
  if (num2 > 9) {
    num2 = 0;
  }
}
function addToNum3() {
  if (isWin()) {
    return "win";
  }
  elemUserNum3.innerHTML = num3;
  userNumberArray[2] = num3;
  num3++;
  if (num3 > 9) {
    num3 = 0;
  }
}

function addToNum4() {
  if (isWin()) {
    return "win";
  }
  elemUserNum4.innerHTML = num4;
  userNumberArray[3] = num4;
  num4++;
  if (num4 > 9) {
    num4 = 0;
  }
}

function dupCheck() {
  let dup = 0;
  for (let i = 0; i < userNumberArray.length; i++) {
    for (let j = 0; j < userNumberArray.length; j++) {
      if (userNumberArray[i] === userNumberArray[j]) {
        dup++;
      }
    }
    if (dup > 1) {
      return true;
    }
    dup = 0;
  }
  return false;
}

function isWin() {
  if (bulls == 4) {
    elemwin.innerHTML = "<p>congratulations you won!!!</p>";
    return true;
  }
  return false;
}
function countBullsAndCows() {
  bulls = 0;
  cows = 0;
  if (isWin()) {
    return "win";
  }
  if (dupCheck()) {
    elemwin.innerHTML = null;
    elemMemory.innerHTML = null;
    elemError.innerHTML = " <p>No duplicate allowd change your number</p>";

    return [bulls, cows];
  }
  if (userNumberArray[0] == pcNumberArray[0]) {
    bulls++;
  } else if (
    userNumberArray[0] == pcNumberArray[1] ||
    userNumberArray[0] == pcNumberArray[2] ||
    userNumberArray[0] == pcNumberArray[3]
  ) {
    cows++;
  }

  if (userNumberArray[1] == pcNumberArray[1]) {
    bulls++;
  } else if (
    userNumberArray[1] == pcNumberArray[0] ||
    userNumberArray[1] == pcNumberArray[2] ||
    userNumberArray[1] == pcNumberArray[3]
  ) {
    cows++;
  }

  if (userNumberArray[2] == pcNumberArray[2]) {
    bulls++;
  } else if (
    userNumberArray[2] == pcNumberArray[0] ||
    userNumberArray[2] == pcNumberArray[1] ||
    userNumberArray[2] == pcNumberArray[3]
  ) {
    cows++;
  }

  if (userNumberArray[3] == pcNumberArray[3]) {
    bulls++;
  } else if (
    userNumberArray[3] == pcNumberArray[0] ||
    userNumberArray[3] == pcNumberArray[1] ||
    userNumberArray[3] == pcNumberArray[2]
  ) {
    cows++;
  }

  showLastNumber();
  console.log(`bulls${bulls} cows${cows}`);
  isWin();
  elembulls.innerHTML = `bulls : ${bulls}`;
  elemcows.innerHTML = `cows : ${cows}`;
  return [bulls, cows];
}
addNumberToPcArray();
console.log(pcNumberArray);

function restartGame() {
  randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  pcNumberArray = [];
  userNumberArray = [0, 1, 2, 3];
  bulls = 0;
  cows = 0;
  num1 = 0;
  num2 = 1;
  num3 = 2;
  num4 = 3;
  numOfGuess = 1;
  addNumberToPcArray();
  console.log(pcNumberArray);
  elemUserNum1.innerHTML = "0";
  elemUserNum2.innerHTML = "1";
  elemUserNum3.innerHTML = "2";
  elemUserNum4.innerHTML = "3";
  elembulls.innerHTML = `bulls`;
  elemcows.innerHTML = `cows`;
  elemwin.innerHTML = "";
  elemMemory.innerHTML = null;
  elemError.innerHTML = null;
}

function giveUp() {
  if (isWin()) {
    return "win";
  }
  elemError.innerHTML = null;
  elemMemory.innerHTML = null;
  elemwin.innerHTML = ` <p>
    the hidden number is ${pcNumberArray[0]}${pcNumberArray[1]}${pcNumberArray[2]}${pcNumberArray[3]}
   </p>`;
}
let numOfGuess = 1;
function showLastNumber() {
  if (isWin()) {
    return "win";
  }
  elemwin.innerHTML = null;
  elemError.innerHTML = null;
  elemMemory.innerHTML += `<p>Your ${numOfGuess}nd number was ${elemUserNum1.innerHTML}${elemUserNum2.innerHTML}${elemUserNum3.innerHTML}${elemUserNum4.innerHTML} | Bulls: ${bulls}  Cows: ${cows}  </p>`;
  numOfGuess++;
}
