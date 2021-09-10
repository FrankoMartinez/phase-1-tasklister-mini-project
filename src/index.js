document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("new-task-description")
    buildToDo(id.value);
    form.reset();
  })
});

function buildToDo(errand) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener("click", handleDelete)
  btn.textContent = "X";
  p.textContent = `${errand} `;
  document.querySelector("#list").appendChild(p)
  p.appendChild(btn)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}