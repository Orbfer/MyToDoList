const addBtn = document.querySelector("#add-btn");
function addTask() {
  addBtn.classList.add("animate__animated", "animate__bounce");
  addBtn.addEventListener("animationend", resetAnimation, { once: true });
}
function resetAnimation() {
  addBtn.classList.remove("animate__animated", "animate__bounce");
}
export default addTask;
