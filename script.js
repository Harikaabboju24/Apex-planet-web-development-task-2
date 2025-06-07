// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Form submitted successfully!");
    this.reset();
  }
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("todoInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">Delete</button>`;
  document.getElementById("todoList").appendChild(li);
  taskInput.value = "";
}
