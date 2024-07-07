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
export default openDashboard;
