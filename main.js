let input = document.querySelector("#input");
let list = document.querySelector("#list-items");
let btn = document.querySelector("#add");
btn.addEventListener("click",function(e){
    if(input.value === ""){
        alert ("you should write something");
    }
    else{
    let todoList = document.createElement("li")
    todoList.innerHTML = `${input.value} <div class="icons" > <i id="edit" class="ri-edit-box-line"></i> <i id="remove" class="ri-delete-bin-line"></i> </div> `;
    list.appendChild(todoList);
    input.value = "";
    let rem = todoList.querySelector("#remove");
    rem.addEventListener("click",remove)
    function remove(){
        todoList.remove();
    }
    let edit = todoList.querySelector("#edit");
    edit.addEventListener("click",() =>{
        let taskText = todoList.firstChild.textContent.trim();
                    let editInput = document.createElement("input");
                    editInput.value = taskText;
                    todoList.firstChild.replaceWith(editInput);

                    editInput.addEventListener("keypress", function(event) {
                        if (event.key === "Enter") {
                            todoList.firstChild.textContent = this.value;
                        }
                    })
    })
    }
})
