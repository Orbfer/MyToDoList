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
  makeCategory("All Tasks", "../src/svgs/tasks-list-svgrepo-com.svg");
  makeCategory("Work Tasks", "../src/svgs/work-svgrepo-com.svg");
  makeCategory("Personal Tasks", "../src/svgs/cross-leg-svgrepo-com.svg");
  makeCategory("Project Tasks", "../src/svgs/project-svgrepo-com.svg");
  btns.style.position = "fixed";
  btns.style.bottom = "-105%";
  btns.style.transition = "0.6s";
  btns.style.top = "-48.5%";
  rotation = (rotation + 90) % 360;
  dashboardBtn.style.transform = `rotate(${rotation}deg)`;
  dashboardBtn.removeEventListener("click", openDashboard);
  dashboardBtn.addEventListener("click", closeDashboard);
}
function closeDashboard() {
  const dashboard = document.querySelector(".dashboard");
  dashboard.classList.remove("animate__slideInUp");
  dashboard.classList.add("animate__slideOutDown");
  btns.style.position = "relative";
  btns.style.bottom = "auto";
  btns.style.left = "auto";
  btns.style.right = "auto";
  btns.style.transition = "1s";
  btns.style.top = "48.5%";
  rotation = (rotation + 90) % 360;
  dashboardBtn.style.transform = `rotate(${rotation}deg)`;
  dashboardBtn.removeEventListener("click", closeDashboard);
  dashboardBtn.addEventListener("click", openDashboard);
  dashboard.addEventListener("animationend", resetDashboard, { once: true });
}
function resetDashboard() {
  const dashboard = document.querySelector(".dashboard");
  dashboard.remove();
  btns.style.top = "0";
  btns.style.transition = "0s";
}
function makeCategory(name, img) {
  const dashboard = document.querySelector(".dashboard");
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  const categoryDivImg = document.createElement("img");
  categoryDivImg.setAttribute("src", img);
  const categoryDivText = document.createElement("div");
  categoryDivText.innerText = name;
  dashboard.append(categoryDiv);
  categoryDiv.append(categoryDivImg);
  categoryDiv.append(categoryDivText);
}
export default openDashboard;
