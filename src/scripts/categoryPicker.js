import { createTask, tasksArr } from "./addTask";
const tasks = document.querySelector("#tasks");
function categoryPicked(category) {
  const allTasks = document.querySelector("#all-tasks");
  const workTasks = document.querySelector("#work-tasks");
  const personalTasks = document.querySelector("#personal-tasks");
  const projectTasks = document.querySelector("#project-tasks");
  if (category === 1) {
    allTasks.style.backgroundColor = "#1a0000";
    workTasks.style.backgroundColor = "#1a2130";
    personalTasks.style.backgroundColor = "#1a2130";
    projectTasks.style.backgroundColor = "#1a2130";
    resetTaskScreen();
    for (let i = 0; i < tasksArr.length; i++) {
      createTask(tasksArr[i]);
    }
  } else if (category === 2) {
    allTasks.style.backgroundColor = "#1a2130";
    workTasks.style.backgroundColor = "#1a0000";
    personalTasks.style.backgroundColor = "#1a2130";
    projectTasks.style.backgroundColor = "#1a2130";
    resetTaskScreen();
    for (let i = 0; i < tasksArr.length; i++) {
      if (tasksArr[i].category == "Work Tasks") {
        createTask(tasksArr[i]);
      } else continue;
    }
  } else if (category === 3) {
    allTasks.style.backgroundColor = "#1a2130";
    workTasks.style.backgroundColor = "#1a2130";
    personalTasks.style.backgroundColor = "#1a0000";
    projectTasks.style.backgroundColor = "#1a2130";
    resetTaskScreen();
    for (let i = 0; i < tasksArr.length; i++) {
      if (tasksArr[i].category == "Personal Tasks") {
        createTask(tasksArr[i]);
      } else continue;
    }
  } else if (category === 4) {
    allTasks.style.backgroundColor = "#1a2130";
    workTasks.style.backgroundColor = "#1a2130";
    personalTasks.style.backgroundColor = "#1a2130";
    projectTasks.style.backgroundColor = "#1a0000";
    resetTaskScreen();
    for (let i = 0; i < tasksArr.length; i++) {
      if (tasksArr[i].category == "Project Tasks") {
        createTask(tasksArr[i]);
      } else continue;
    }
  }
}
function resetTaskScreen() {
  while (tasks.firstChild) {
    tasks.firstChild.remove();
  }
}
export default categoryPicked;
