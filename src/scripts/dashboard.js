const page = document.querySelector("#page");
const btns = document.querySelectorAll(".div-btn");
const dashboardBtn = document.querySelector("#dashboard-btn");
let rotation = 0;
function openDashboard() {
  page.style.gridTemplateRows = "1fr 4fr 0.5fr 1fr";
  const dashboard = document.createElement("div");
  dashboard.style.backgroundColor = "#58287f";
  dashboard.classList.add(
    "dashboard",
    "animate__animated",
    "animate__slideInUp"
  );
  page.appendChild(dashboard);
  rotation = (rotation + 90) % 360;
  dashboardBtn.style.transform = `rotate(${rotation}deg)`;
  btns.forEach((btn) =>
    btn.classList.add("animate__animated", "animate__slideInUp")
  );
  dashboardBtn.removeEventListener("click", openDashboard);
  dashboardBtn.addEventListener("click", closeDashboard);
}
function closeDashboard() {
  const dashboard = document.querySelector(".dashboard");
  dashboard.classList.remove("animate__slideInUp");
  dashboard.classList.add("animate__slideOutDown");
  setTimeout(() => {
    dashboard.remove();
    btns.forEach((btn) => btn.classList.remove("animate__slideInUp"));
    btns.forEach((btn) => btn.classList.add("animate__slideInDown"));
    page.style.gridTemplateRows = "1fr 4fr 0.5fr";
  }, 600);
  dashboardBtn.removeEventListener("click", closeDashboard);
  dashboardBtn.addEventListener("click", openDashboard);
}
export default openDashboard;
