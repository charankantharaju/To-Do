document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const countSpan = document.getElementById("count");

  // Function to update the todo count
  function updateCount() {
    countSpan.textContent = todoList.children.length;
  }

  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTodo(todoInput.value.trim());
    todoInput.value = "";
  });

  function addTodo(todoText) {
    if (!todoText) return;
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">&times;</button>
        `;
    todoList.appendChild(li);

    // Update the count after adding
    updateCount();

    li.querySelector(".delete-btn").addEventListener("click", function () {
      todoList.removeChild(li);
      // Update the count after deleting
      updateCount();
    });

    li.querySelector("span").addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  }

  // Initialize the count on page load (optional)
  updateCount();
});
