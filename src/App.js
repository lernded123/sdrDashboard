const todoItem = document.querySelectorAll("span.not");
const done = document.querySelectorAll("span.completed");
const doing = document.querySelectorAll("span.not");
const addNewTask = document.querySelectorAll();

Array.from(todoItem).forEach((elem) => {
  elem.addEventListener("click", markComplete);
});

Array.from(done).forEach((elem) => {
  elem.addEventListener("click", markIncomplete);
});

async function markComplete() {
  const todoId = this.parentNode.dataset.todoId;
  try {
    const response = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id;
}
