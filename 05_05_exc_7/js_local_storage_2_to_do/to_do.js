let toDoList = localStorage.getItem("to do list");
let toDoListCopy;
let greenArry =localStorage.getItem("done");

let elemGreenList = document.querySelector(".geen-list")
let elemList = document.querySelector(".list");
let elemText = document.querySelector(".text");

validation();

print(toDoListCopy);


function validation() {
  if (toDoList == null) {
    toDoList = [];
  }
  toDoList = JSON.parse(toDoList);
  if (greenArry == null) {
    greenArry = [];
  }
  greenArry = JSON.parse(greenArry);
  toDoListCopy = toDoList;
  // toDoListCopy = toDoList;
}

function addToDo() {
  elemList.innerHTML = null;
  let inputValue = elemText.value;
  console.log(typeof inputValue);
  if (toDoList.indexOf(inputValue) == -1 && inputValue != "") {
    toDoList.push(inputValue);
  }
  toDoList.sort();
  localStorage.setItem("to do list", JSON.stringify(toDoList));
  console.log(toDoList);
  elemList.innerHTML = null;
  elemText.value = null;
  print(toDoList);
}

function print(toDoList) {
  for (let index = 0; index < toDoList.length; index++) {
    elemList.innerHTML += `<p onclick = checkMark(this)> ${toDoList[index]} </p>`;
  }
  

}
 
function printGreen(greenArry) {
  for (let index = 0; index < greenArry.length; index++) {
    elemGreenList.innerHTML += `<p onclick = checkMarkGreen([this])> ${greenArry[index]} </p>`;
    elemGreenList.style.color= "green"
  }

}
function checkMark(task) {
  console.log(task.innerText);
  for (let index = 0; index < toDoList.length; index++) {
    const element = toDoList[index];
    if (toDoList[index] == task.innerText) {
      greenArry.push(toDoList[index])
      elemGreenList.innerHTML = null;
      printGreen(greenArry)
      toDoList.splice(index, 1);
    }
  }
  console.log(toDoList);
  task.remove();
  localStorage.setItem("to do list", JSON.stringify(toDoList));
  localStorage.setItem("done", JSON.stringify(greenArry));
}


function checkMarkGreen(task) {
  // console.log(task.innerText);
  for (let index = 0; index < toDoList.length; index++) {
    const element = greenArry[index];
    if (greenArry[index] == task.innerText) {
      
      
      greenArry.splice(index, 1);
    }
    localStorage.setItem('done',JSON.stringify(greenArry))
  }
  
  task.remove();
  // localStorage.setItem("to do list", JSON.stringify(toDoList));
}
function clearlist() {
  localStorage.clear();
  toDoList = [];
  greenArry = [];
  elemList.innerHTML = `<p> ${toDoList} </p>`;
  elemGreenList.innerHTML = `<p> ${greenArry} </p>`;
}
