//selectors
document.querySelector("form").addEventListener("submit", hanleSubmitForm);
document.querySelector("#clearAll").addEventListener("click", clearAll);

//Event Handlers
function hanleSubmitForm(apple) {
  apple.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addTodo(input.value);
  input.value = "";
}

//Helpers
function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  const timeId = Date.now();

  li.id = "li_" + timeId;

  li.innerHTML = `
        <span class="todo-item" id="${"note_" + timeId}">${todo}</span>
        <span><button name="checkButton" onclick="markComplete('${
          "note_" + timeId
        }')"><i class="fas fa-check-square"></i></button>
        <button name= "deleteButton" onclick="deleteItem('${
          "li_" + timeId
        }')"><i class="fas fa-trash"></i></button></span>
    `;
  li.classList.add("todo-list-item");
  ul.appendChild(li);
}

function markComplete(id) {
  console.log(id);
  const elem = document.querySelector(`#${id}`);
  elem.style.textDecoration = "line-through";
}

function deleteItem(id) {
  console.log(id);
  const elem = document.querySelector(`#${id}`);
  elem.remove();
}

function clearAll() {
  let ul = document.querySelector("ul");
  ul.innerHTML = "";
}


