// To-Do List Logic
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

// Product List Logic
const products = [
  { name: "T-Shirt", category: "clothing", price: 25, rating: 4.2 },
  { name: "Laptop", category: "electronics", price: 900, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 45, rating: 4.1 },
  { name: "Headphones", category: "electronics", price: 100, rating: 4.6 },
];

function filterAndSort() {
  const category = document.getElementById("category").value;
  const sort = document.getElementById("sort").value;

  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const container = document.getElementById("productList");
  container.innerHTML = filtered.map(p =>
    `<div class="product">
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating}</p>
    </div>`
  ).join("");
}

window.onload = function () {
  loadTasks();
  filterAndSort();
};
