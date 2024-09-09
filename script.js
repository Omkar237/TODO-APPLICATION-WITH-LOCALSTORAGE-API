
function loadTodos() {
  let storedTodos = localStorage.getItem('todoList');
  if (storedTodos) {
    return JSON.parse(storedTodos);
  } else {
    return [
      { title: 'Take kid to bath', dueDate: '12-10-2024' },
      { title: 'You have no time', dueDate: '11-09-2024' },
    ];
  }
}

// Initialize todoList with data from local storage or default
let todoList = loadTodos();

displayTodo();


function addTodo(){
  let inputElement = document.querySelector('#todoInput');
  let dateElement = document.querySelector('#todoDate');

  let inputValue = inputElement.value;
  let dateValue = dateElement.value;

  todoList.push({title: inputValue, dueDate: dateValue});

  localStorage.setItem('todoList', JSON.stringify(todoList))
  displayTodo();
}


function displayTodo(){
  let gridcolumn = document.querySelector('.todo-container');
  let newHtml = '';
  for (let todo = 0; todo < todoList.length; todo++) {
    let {title, dueDate} = todoList[todo];
    newHtml+=`
      <span>${title}</span>
      <span>${dueDate}</span>
      <button class="deleteButton" onclick="deleteTodo(${todo})";>Delete</button>`;
  }  
  gridcolumn.innerHTML = newHtml;
}

function deleteTodo(todo){
  todoList.splice(todo, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList))

  displayTodo();
}