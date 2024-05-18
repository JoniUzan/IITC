let count = 1;
let elementTime = document.querySelector(".interval");

const elementStop = document.querySelector(".stop");
const elementStart = document.querySelector(".start");
function myInteval() {
  let id = setInterval(function () {
    elementTime.innerHTML = `<p>${count}</p>`;
    count++;
    elementStop.addEventListener("click", () => clearInterval(id));
  }, 1000);
}

elementStart.addEventListener("click", () => myInteval());
