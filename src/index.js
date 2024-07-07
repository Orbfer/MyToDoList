import "./styles.css";
import "animate.css";
import openDashboard from "./scripts/dashboard";
import addTask from "./scripts/addTask";
const dashboardBtn = document.querySelector("#dashboard-btn");
const addBtn = document.querySelector("#add-btn");
dashboardBtn.addEventListener("click", openDashboard);
addBtn.addEventListener("click", addTask);
