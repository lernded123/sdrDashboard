const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");

Array.from(todoItem).forEach((elem) => {
  elem.addEventListener("click", markComplete);
});

Array.from(todoComplete).forEach((elem) => {
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

async function markIncomplete() {}
