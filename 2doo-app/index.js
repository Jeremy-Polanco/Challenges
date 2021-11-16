const listContainer = document.querySelector("#todo-container .pending");
const doneListContainer = document.querySelector("#todo-container .done");
const allList = document.querySelector("#todo-container .all")
const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoItems = [

];

todoButton.addEventListener("click", addTask)
function addTask (event) {
    event.preventDefault();

    let newTask = {
        id: todoItems.length+1,
        isDone: false,
        text: todoInput.value
    }
    todoItems.push(newTask)
    todoInput.value = "";
    console.log(todoItems)
    reRenderContent();
}

function DeleteTask(e) {
for(let i = 0; i < todoItems.length; i++){
  if(todoItems[i].id === e){
    todoItems.splice(todoItems.indexOf(todoItems[i]), 1)
  }
  reRenderContent();
}
}

function handleClick(e) {
  const listItem = document.querySelector(`[data-id="${e}"]`);

  if (!listItem.classList.value.includes("done")){
    listItem.classList.toggle("done");
    doneListContainer.appendChild(listItem) 
    const trash = document.createElement("button");
    trash.innerHTML = `<i class="fa fa-trash" onclick="DeleteTask(${e})"></i>`
    listItem.appendChild(trash)
    return;
  }
  

  listItem.classList.toggle("done");
  listItem.remove();
  listContainer.appendChild(listItem);
  listItem.lastElementChild.remove();
  return;
}

function reRenderContent(){
    listContainer.innerHTML = "";
    doneListContainer.innerHTML = "";
    allList.innerHTML = "";
    todoItems.forEach(item => {
    const listToPush = item.isDone ? doneListContainer : listContainer 

    console.log(listToPush) 
    
     listToPush.innerHTML += `
      <li" data-id="${item.id}" class="list-item ${item.isDone ? 'done' : ''}">     
      <input type="checkbox" onclick="handleClick(${item.id})">
        ${item.text}
      </li>
  ` 
  
    allList.innerHTML = `
    <li" data-id="${item.id}" class="list-item ${item.isDone ?'done' : ''}">
    <input type="checkbox" onclick="handleClick(${item.id})">
       ${item.text}   
      </li>
      `
  });

}




                  
                      