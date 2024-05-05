let toDoList = localStorage.getItem("to do list");
let toDoListCopy;

let elemList = document.querySelector(".list");
let elemText = document.querySelector(".text");

validation();

print(toDoListCopy);

function validation() {
  if (toDoList == null) {
    toDoList = [];
  }
  toDoList = JSON.parse(toDoList);
  toDoListCopy = toDoList;
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
    elemList.innerHTML += `<p onclick = checkMark(this)>${toDoList[index]} </p>`;
  }
}

function checkMark(task) {
  console.log(task.innerText);
  for (let index = 0; index < toDoList.length; index++) {
    const element = toDoList[index];
    if (toDoList[index] == task.innerText) {
      toDoList.splice(index, 1);
    }
  }
  console.log(toDoList);
  task.remove();
  localStorage.setItem("to do list", JSON.stringify(toDoList));
}
function clearlist() {
  localStorage.clear();
  toDoList = [];
  elemList.innerHTML = `<p> ${toDoList} </p>`;
}
