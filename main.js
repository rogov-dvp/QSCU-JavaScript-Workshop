let todos = [];
let filter = "";

//renders todos
function filterList() {

    //remove all current nodes in unordered list to remove duplicates
    const ul = document.getElementById("list");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    
    //create new list, containing only filter words
    let filteredList = [];
    todos.forEach(todo => {
        if(todo.toLowerCase().includes(filter.toLowerCase())) {
            filteredList.push(todo);
        }
    })

    //re-render the list 
    filteredList.forEach(todo => {
        addToDo(todo)
    })
}

//adds new todos
function addToDo(todo) {
    //create new element
    const li = document.createElement("li");
    const span = document.createElement("span");

    //append text and attributes to tags
    const text = document.createTextNode(todo);
    span.appendChild(text);
    

    //append child nodes to <li>
    li.appendChild(span);

    //append <li> to <ul>
    const ul = document.getElementById("list").appendChild(li);
}

document.getElementById("form-add-todo").addEventListener("submit", (event) => {
    event.preventDefault(); //Prevents submit button from going to new page
    const newTodo = document.getElementById("input-add-todo").value;
    todos.push(newTodo);
    filterList();

    //remove textbox values;
    document.getElementById("input-add-todo").value = "";
});

//Called when using filter input
document.getElementById("filter-todos").addEventListener("input", (event) => {
    //change filter value to whatever is input's value
    filter = event.target.value;
    filterList();
})