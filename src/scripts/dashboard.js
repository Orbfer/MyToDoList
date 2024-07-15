import categoryPicked from "./categoryPicker";
import { chosenCategory } from "./categoryPicker";
const dashboardCont = document.querySelector("#dashboard-cont");
const btns = document.querySelector("#btns");
const dashboardBtn = document.querySelector("#dashboard-btn");
let rotation = 0;
function openDashboard() {
  const dashboard = document.createElement("div");
  dashboard.classList.add(
    "dashboard",
    "animate__animated",
    "animate__slideInUp"
  );
  dashboardCont.appendChild(dashboard);
  makeCategory(
    "All Tasks",
    "../src/svgs/tasks-list-svgrepo-com.svg",
    "all-tasks"
  );
  makeCategory("Work Tasks", "../src/svgs/work-svgrepo-com.svg", "work-tasks");
  makeCategory(
    "Personal Tasks",
    "../src/svgs/cross-leg-svgrepo-com.svg",
    "personal-tasks"
  );
  makeCategory(
    "Project Tasks",
    "../src/svgs/project-svgrepo-com.svg",
    "project-tasks"
  );
  const allTasks = document.querySelector("#all-tasks");
  const workTasks = document.querySelector("#work-tasks");
  const personalTasks = document.querySelector("#personal-tasks");
  const projectTasks = document.querySelector("#project-tasks");
  if (chosenCategory == 1) {
    allTasks.style.backgroundColor = "#1a0000";
    workTasks.style.backgroundColor = "#1a2130";
    personalTasks.style.backgroundColor = "#1a2130";
    projectTasks.style.backgroundColor = "#1a2130";
  } else if (chosenCategory == 2) {
    allTasks.style.backgroundColor = "#1a2130";
    workTasks.style.backgroundColor = "#1a0000";
    personalTasks.style.backgroundColor = "#1a2130";
    projectTasks.style.backgroundColor = "#1a2130";
  } else if (chosenCategory == 3) {
    allTasks.style.backgroundColor = "#1a2130";
    workTasks.style.backgroundColor = "#1a2130";
    personalTasks.style.backgroundColor = "#1a0000";
    projectTasks.style.backgroundColor = "#1a2130";
  } else if (chosenCategory == 4) {
    allTasks.style.backgroundColor = "#1a2130";
    workTasks.style.backgroundColor = "#1a2130";
    personalTasks.style.backgroundColor = "#1a2130";
    projectTasks.style.backgroundColor = "#1a0000";
  }
  allTasks.addEventListener("click", () => categoryPicked(1));
  workTasks.addEventListener("click", () => categoryPicked(2));
  personalTasks.addEventListener("click", () => categoryPicked(3));
  projectTasks.addEventListener("click", () => categoryPicked(4));
  const mediaQuery = window.matchMedia(
    "(min-width: 1600px) and (max-width: 4000px)"
  );
  if (mediaQuery.matches) {
    btns.style.position = "fixed";
    btns.style.bottom = "-105%";
    btns.style.right = "10%";
    btns.style.transition = "0.6s";
    btns.style.top = "-50%";
  } else {
    btns.style.position = "fixed";
    btns.style.bottom = "-105%";
    btns.style.transition = "0.6s";
    btns.style.top = "-48.5%";
  }
  rotation = (rotation + 90) % 360;
  dashboardBtn.style.transform = `rotate(${rotation}deg)`;
  dashboardBtn.removeEventListener("click", openDashboard);
  dashboardBtn.addEventListener("click", closeDashboard);
}
function closeDashboard() {
  const dashboard = document.querySelector(".dashboard");
  dashboard.classList.remove("animate__slideInUp");
  dashboard.classList.add("animate__slideOutDown");
  const mediaQuery = window.matchMedia(
    "(min-width: 1600px) and (max-width: 4000px)"
  );
  if (mediaQuery.matches) {
    btns.style.position = "relative";
    btns.style.bottom = "auto";
    btns.style.left = "auto";
    btns.style.right = "auto";
    btns.style.transition = "1s";
    btns.style.top = "70.3%";
  } else {
    btns.style.position = "relative";
    btns.style.bottom = "auto";
    btns.style.left = "auto";
    btns.style.right = "auto";
    btns.style.transition = "1s";
    btns.style.top = "46.3%";
  }
  rotation = (rotation + 90) % 360;
  dashboardBtn.style.transform = `rotate(${rotation}deg)`;
  dashboard.addEventListener("animationend", resetDashboard, { once: true });
}
function resetDashboard() {
  const dashboard = document.querySelector(".dashboard");
  dashboard.remove();
  btns.style.top = "0";
  btns.style.transition = "0s";
  dashboardBtn.removeEventListener("click", closeDashboard);
  dashboardBtn.addEventListener("click", openDashboard);
}
function makeCategory(name, img, id) {
  const dashboard = document.querySelector(".dashboard");
  const categoryDiv = document.createElement("div");
  categoryDiv.id = id;
  const categoryDivImg = document.createElement("img");
  categoryDivImg.setAttribute("src", img);
  const categoryDivText = document.createElement("div");
  categoryDivText.innerText = name;
  dashboard.append(categoryDiv);
  categoryDiv.append(categoryDivImg);
  categoryDiv.append(categoryDivText);
}
export default openDashboard;
