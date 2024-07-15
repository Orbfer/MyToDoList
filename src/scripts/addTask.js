import { saveTasksToLocalStorage } from "./storage";
const addBtn = document.querySelector("#add-btn");
const sitePage = document.querySelector("#page");
let tasksArr = [];
let priority = 1;
function addTask() {
  addBtn.classList.add("animate__animated", "animate__flash");
  addBtn.addEventListener("animationend", resetAnimationAdd, { once: true });
  const popUpBackground = document.createElement("div");
  popUpBackground.classList.add("popup-background");
  const popUp = document.createElement("div");
  popUp.classList.add("popup");
  sitePage.append(popUpBackground);
  popUpBackground.append(popUp);
  const taskName = document.createElement("input");
  taskName.classList.add("task-name");
  taskName.setAttribute("placeholder", "Input task");
  taskName.setAttribute("maxlength", "18");
  taskName.addEventListener("input", () => taskName.classList.remove("error"));
  popUp.append(taskName);
  const closeBtnCont = document.createElement("div");
  closeBtnCont.classList.add("close-btn-cont");
  const closeBtn = document.createElement("img");
  closeBtn.setAttribute("src", "../src/svgs/close-circle-svgrepo-com.svg");
  closeBtn.addEventListener("click", closePopUp);
  popUp.append(closeBtnCont);
  closeBtnCont.append(closeBtn);
  const category = document.createElement("select");
  category.setAttribute("id", "category-input");
  const workTasksCategory = document.createElement("option");
  workTasksCategory.setAttribute("value", "Work Tasks");
  workTasksCategory.innerText = "Work Tasks";
  const personalTasksCategory = document.createElement("option");
  personalTasksCategory.setAttribute("value", "Personal Tasks");
  personalTasksCategory.innerText = "Personal Tasks";
  const projectTasksCategory = document.createElement("option");
  projectTasksCategory.setAttribute("value", "Project Tasks");
  projectTasksCategory.innerText = "Project Tasks";
  popUp.append(category);
  category.append(workTasksCategory);
  category.append(personalTasksCategory);
  category.append(projectTasksCategory);
  const taskDate = document.createElement("input");
  taskDate.setAttribute("type", "date");
  taskDate.setAttribute("id", "task-date");
  taskDate.addEventListener("change", () => taskDate.classList.remove("error"));
  popUp.append(taskDate);
  const sendBtnCont = document.createElement("div");
  sendBtnCont.classList.add("send-btn-cont");
  const sendBtn = document.createElement("img");
  sendBtn.setAttribute("id", "send-btn");
  sendBtn.setAttribute("src", "../src/svgs/send-svgrepo-com.svg");
  popUp.append(sendBtnCont);
  sendBtnCont.append(sendBtn);
  createPriorityBar();
  sendBtn.addEventListener("click", addAnimation);
  sendBtn.addEventListener("animationend", addNewTask, { once: true });
}
function addAnimation() {
  const taskName = document.querySelector(".task-name").value;
  const taskDate = document.querySelector("#task-date").value;
  if (taskName.trim() === "" || taskDate === "") {
    highlightEmptyFields();
    return;
  }
  const sendBtn = document.querySelector("#send-btn");
  sendBtn.classList.add("animate__animated", "animate__fadeOutRightBig");
}
function addNewTask() {
  const taskName = document.querySelector(".task-name").value;
  const category = document.querySelector("#category-input").value;
  const taskDate = document.querySelector("#task-date").value;
  const taskObject = {
    name: taskName,
    category: category,
    date: taskDate,
    priority: priority,
  };
  tasksArr.push(taskObject);
  saveTasksToLocalStorage();
  const popUp = document.querySelector(".popup-background");
  popUp.remove();
  createTask(taskObject);
}
function createTask(taskObject) {
  const tasks = document.querySelector("#tasks");
  const task = document.createElement("div");
  task.classList.add("task", "animate__animated", "animate__zoomInDown");
  tasks.append(task);
  const taskDescription = document.createElement("div");
  taskDescription.setAttribute("id", "task-description");
  taskDescription.innerText = taskObject.name;
  task.append(taskDescription);
  const checkboxCont = document.createElement("div");
  checkboxCont.id = "checkbox-cont";
  task.append(checkboxCont);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task-checkbox";
  checkbox.addEventListener("change", toggleTaskCompletion);
  checkboxCont.append(checkbox);
  const taskCategory = document.createElement("div");
  taskCategory.id = "task-category";
  taskCategory.innerText = taskObject.category;
  task.append(taskCategory);
  const taskDueDate = document.createElement("div");
  taskDueDate.id = "task-due-date";
  taskDueDate.innerText = taskObject.date;
  task.append(taskDueDate);
  const taskPriority = document.createElement("div");
  taskPriority.id = "task-priority";
  task.append(taskPriority);
  const taskPriorityImg = document.createElement("img");
  taskPriorityImg.src = getTaskPriority();
  taskPriority.append(taskPriorityImg);
  function getTaskPriority() {
    if (priority == 1) {
      return "../src/svgs/network-cellular-signal-weak-svgrepo-com.svg";
    } else if (priority == 2) {
      return "../src/svgs/network-cellular-signal-ok-svgrepo-com.svg";
    } else if (priority == 3) {
      return "../src/svgs/network-cellular-signal-good-svgrepo-com.svg";
    } else if (priority == 4) {
      return "../src/svgs/network-cellular-signal-excellent-svgrepo-com.svg";
    }
  }
  function toggleTaskCompletion() {
    task.classList.remove("animate__zoomInDown");
    task.classList.add("animate__pulse");
    task.addEventListener("animationend", removeTask, { once: true });
  }
  function removeTask() {
    task.classList.remove("animate__pulse");
    task.classList.add("animate__backOutRight");
    task.addEventListener(
      "animationend",
      () => {
        task.remove();
        tasksArr = tasksArr.filter((t) => t !== taskObject);
        saveTasksToLocalStorage();
      },
      { once: true }
    );
  }
}
function highlightEmptyFields() {
  const taskNameInput = document.querySelector(".task-name");
  const taskDateInput = document.querySelector("#task-date");
  if (taskNameInput.value.trim() === "") {
    taskNameInput.classList.add("error");
  } else {
    taskNameInput.classList.remove("error");
  }
  if (taskDateInput.value === "") {
    taskDateInput.classList.add("error");
  } else {
    taskDateInput.classList.remove("error");
  }
}
function resetAnimationAdd() {
  addBtn.classList.remove("animate__animated", "animate__flash");
}
function closePopUp() {
  const popUp = document.querySelector(".popup-background");
  popUp.remove();
}
function createPriorityBar() {
  priority = 1;
  const popUp = document.querySelector(".popup");
  const priorityBarCont = document.createElement("div");
  priorityBarCont.setAttribute("id", "priority-bar-cont");
  popUp.append(priorityBarCont);
  const priorityBarText = document.createElement("div");
  priorityBarText.setAttribute("id", "priority-bar-text");
  priorityBarText.innerText = "Priority";
  priorityBarCont.append(priorityBarText);
  const priorityBar = document.createElement("div");
  priorityBar.setAttribute("id", "priority-bar");
  priorityBarCont.append(priorityBar);
  const bar1 = document.createElement("div");
  bar1.classList.add("bar");
  priorityBar.append(bar1);
  const bar2 = document.createElement("div");
  bar2.classList.add("bar");
  priorityBar.append(bar2);
  const bar3 = document.createElement("div");
  bar3.classList.add("bar");
  priorityBar.append(bar3);
  const bar4 = document.createElement("div");
  bar4.classList.add("bar");
  priorityBar.append(bar4);
  bar2.style.backgroundColor = "#f5edce";
  bar3.style.backgroundColor = "#f5edce";
  bar4.style.backgroundColor = "#f5edce";
  bar1.addEventListener("click", () => selectPriority(1));
  bar2.addEventListener("click", () => selectPriority(2));
  bar3.addEventListener("click", () => selectPriority(3));
  bar4.addEventListener("click", () => selectPriority(4));
  function selectPriority(barNumber) {
    if (barNumber === 1) {
      priority = 1;
      bar1.style.backgroundColor = "#89c4e1";
      bar2.style.backgroundColor = "#f5edce";
      bar3.style.backgroundColor = "#f5edce";
      bar4.style.backgroundColor = "#f5edce";
    } else if (barNumber === 2) {
      priority = 2;
      bar1.style.backgroundColor = "#89c4e1";
      bar2.style.backgroundColor = "#89c4e1";
      bar3.style.backgroundColor = "#f5edce";
      bar4.style.backgroundColor = "#f5edce";
    } else if (barNumber === 3) {
      priority = 3;
      bar1.style.backgroundColor = "#89c4e1";
      bar2.style.backgroundColor = "#89c4e1";
      bar3.style.backgroundColor = "#89c4e1";
      bar4.style.backgroundColor = "#f5edce";
    } else if (barNumber === 4) {
      priority = 4;
      bar1.style.backgroundColor = "#89c4e1";
      bar2.style.backgroundColor = "#89c4e1";
      bar3.style.backgroundColor = "#89c4e1";
      bar4.style.backgroundColor = "#89c4e1";
    }
  }
}
export default addTask;
export { createTask, tasksArr };
