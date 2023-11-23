const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");

Array.from(todoComplete).forEach((elem) => {
  elem.addEventListener("click", markComplete);
});
