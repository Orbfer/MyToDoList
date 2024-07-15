import { createTask, tasksArr } from "./addTask";
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
}
function loadTasksFromLocalStorage() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    const parsedTasks = JSON.parse(savedTasks);
    parsedTasks.forEach((task) => {
      tasksArr.push(task);
      createTask(task);
    });
  }
}
export { saveTasksToLocalStorage, loadTasksFromLocalStorage };
