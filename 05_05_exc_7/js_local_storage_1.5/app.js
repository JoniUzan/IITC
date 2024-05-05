let count1 = 0;
let count2 = 0;
let getCount1 = localStorage.getItem("count1");
let elemCount1 = document.querySelector(".count1");

let getCount2 = localStorage.getItem("count1");
let elemCount2 = document.querySelector(".count2");

function addToCount1() {
  count1++;
  count1 = JSON.stringify(count1);
  localStorage.setItem("count1", count1);
}

function show1() {
  elemCount1.innerHTML = `<p>${count1}</p>`;
}
function restartCount1() {
  localStorage.removeItem("count1");
  count1 = 0;
}

function addToCount2() {
  count2++;
  count2 = JSON.stringify(count2);
  localStorage.setItem("count", count2);
}

function show2() {
  elemCount2.innerHTML = `<p>${count2}</p>`;
}
function restartCount2() {
  localStorage.removeItem("count");
  count2 = 0;
}
// localStorage.clear();
