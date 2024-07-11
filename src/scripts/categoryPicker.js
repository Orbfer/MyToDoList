import { tasksArr } from "./addTask";
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
  } else if (category === 2) {
    allTasks.style.backgroundColor = "#1a2130";
    workTasks.style.backgroundColor = "#1a0000";
    personalTasks.style.backgroundColor = "#1a2130";
    projectTasks.style.backgroundColor = "#1a2130";
    for (let i = 0; i < tasksArr.length; i++) {
      if (tasksArr[i].category == "Work Tasks") {
        console.log("yay");
      } else continue;
    }
  } else if (category === 3) {
    allTasks.style.backgroundColor = "#1a2130";
    workTasks.style.backgroundColor = "#1a2130";
    personalTasks.style.backgroundColor = "#1a0000";
    projectTasks.style.backgroundColor = "#1a2130";
  } else if (category === 4) {
    allTasks.style.backgroundColor = "#1a2130";
    workTasks.style.backgroundColor = "#1a2130";
    personalTasks.style.backgroundColor = "#1a2130";
    projectTasks.style.backgroundColor = "#1a0000";
  }
}
export default categoryPicked;
