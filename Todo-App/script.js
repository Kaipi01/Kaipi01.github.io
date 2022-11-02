const themeBtn = document.querySelector(".theme-btn"),
  checkBtns = document.querySelectorAll(".task__btn-check"),
  taskDeleteBtns = document.querySelectorAll(".task__btn-delete"),
  clearTaksCompleteBtn = document.querySelector(".todo__items-clear"),
  taskAddInput = document.querySelector(".todo__input"),
  sortBtnAll = document.querySelector(".todo__sort-btn-all"),
  sortBtnActive = document.querySelector(".todo__sort-btn-active"),
  sortBtnCompleted = document.querySelector(".todo__sort-btn-completed"),
  todoList = document.querySelector(".todo__list"),
  inputBtnCheck = document.querySelector(".task__btn-check");

Sortable.create(todoList);

let theme = localStorage.getItem("theme");

if (!theme) {
  setTheme("light");
}
setTheme(theme);

const todoItemsInfo = document.querySelector(".todo__items-info-number");
const todoOptions = document.querySelector(".todo__options");
const todoTip = document.querySelector(".todo__tip");

let itemsNumber = 5;
let isNewTaskComplete = false;

function remove(task) {
  task.remove();
  if (task.classList[1] !== "task--complete") {
    changeTasksNumberInfo("-");
  }
  checkTaskNodeNumber();
}

function markAsComplete(task) {
  task.classList.toggle("task--complete");

  if (task.classList[1] === "task--complete") {
    changeTasksNumberInfo("-");
  } else {
    changeTasksNumberInfo("+");
  }
}

function markInputCheck() {
  const inputBtnCheck = document.querySelector(".task__btn-check");
  inputBtnCheck.classList.toggle("task__btn-check--inputActive");
  isNewTaskComplete ? (isNewTaskComplete = false) : (isNewTaskComplete = true);
  console.log("isNewTaskComplete: " + isNewTaskComplete);
}

function clearAllComplete() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.classList[1] === "task--complete") {
      task.remove();
    }
  });
  checkTaskNodeNumber();
}

function add(name) {
  const todoList = document.querySelector(".todo__list");
  const task = document.createElement("li");
  const taskName = document.createElement("p");
  const checkBtn = document.createElement("btn");
  const checkBtnIcon = document.createElement("img");
  const deleteBtn = document.createElement("btn");
  const deleteBtnIcon = document.createElement("img");
  const tasks = document.querySelectorAll(".task");

  if (isNewTaskComplete) {
    task.className = "task task--complete";
  } else {
    task.className = "task";
    changeTasksNumberInfo("+");
  }

  taskName.className = "task__name";
  taskName.textContent = name;

  checkBtn.className = "btn task__btn-check";
  checkBtn.addEventListener("click", () => {
    markAsComplete(task);
  });
  checkBtnIcon.className = "task__btn-check-icon";
  checkBtnIcon.src = './images/icon-check.svg';
  checkBtnIcon.alt = "task complete";

  deleteBtn.className = "btn task__btn-delete";
  deleteBtn.addEventListener("click", () => {
    remove(task);
  });
  deleteBtnIcon.src = './images/icon-cross.svg';
  deleteBtnIcon.alt = "delete task";

  checkBtn.append(checkBtnIcon);
  deleteBtn.append(deleteBtnIcon);
  task.append(checkBtn);
  task.append(taskName);
  task.append(deleteBtn);
  todoList.append(task);

  if (tasks.length === 0) {
    showTodoOptions();
  }
}

function checkTaskNodeNumber() {
  const tasks = document.querySelectorAll(".task");
  if (tasks.length === 0) {
    hideTodoOptions();
  }
}

function changeTasksNumberInfo(symbol) {
  symbol === "-" ? itemsNumber-- : itemsNumber++;
  todoItemsInfo.textContent = itemsNumber;
}

function hideTodoOptions() {
  todoOptions.classList.add("todo__options--hide");
  todoTip.classList.add("todo__tip--hide");
}

function showTodoOptions() {
  todoOptions.classList.remove("todo__options--hide");
  todoTip.classList.remove("todo__tip--hide");
}

function changeTheme() {
  if (theme === "light") {
    setTheme("dark");
  } else setTheme("light");
}

function setTheme(themeMode) {
  const moonIcon = document.querySelector(".theme-btn-icon-moon");
  const sunIcon = document.querySelector(".theme-btn-icon-sun");

  if (themeMode === "light") {
    moonIcon.classList.remove("theme-btn-icon-moon--hide");
    sunIcon.classList.add("theme-btn-icon-sun--hide");
  } else {
    moonIcon.classList.add("theme-btn-icon-moon--hide");
    sunIcon.classList.remove("theme-btn-icon-sun--hide");
  }
  theme = themeMode;
  document.body.className = "";
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
}

themeBtn.addEventListener("click", changeTheme);

clearTaksCompleteBtn.addEventListener("click", clearAllComplete);

inputBtnCheck.addEventListener("click", markInputCheck);

sortBtnAll.addEventListener("click", (e) => {
  byAll(e);
});

sortBtnActive.addEventListener("click", (e) => {
  byActive(e);
});

sortBtnCompleted.addEventListener("click", (e) => {
  byCompleted(e);
});

checkBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const task = btn.parentElement;
    if (task.classList.contains("task")) {
      markAsComplete(task);
    }
  });
});

taskDeleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const task = btn.parentElement;
    remove(task);
  });
});

taskAddInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && taskAddInput.value !== "") {
    const taskName = taskAddInput.value;
    add(taskName);
    taskAddInput.value = "";
  }
});

function byAll(e) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => task.classList.remove("task--hide"));
  markBtnAsActive(e.target);
}

function byActive(e) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.classList.contains("task--complete")) {
      task.classList.add("task--hide");
    } else {
      task.classList.remove("task--hide");
    }
  });
  markBtnAsActive(e.target);
}

function byCompleted(e) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.classList.contains("task--complete")) {
      task.classList.remove("task--hide");
    } else {
      task.classList.add("task--hide");
    }
  });
  markBtnAsActive(e.target);
}

function markBtnAsActive(btn) {
  const sortBtns = document.querySelectorAll(".todo__sort-btn");
  sortBtns.forEach((btn) => btn.classList.remove("todo__sort-btn--active"));
  btn.classList.add("todo__sort-btn--active");
}
