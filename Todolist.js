

let btn_todo = document.getElementById('btn_todo');
let tolist = document.getElementById('tolist');

console.log("Clid");


function add() {
    console.log("Clicked Add");
    let todolist = document.getElementById('todolist').value;

    if (todolist === "") return;

    let enteredtext = document.createElement("li");
    enteredtext.textContent = todolist;

    let img = document.createElement('img')

    img.src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png";
    img.style.width = "15px";
    img.style.height = '15px';
    img.style.marginTop = '5px'
    img.style.marginLeft = "10px";
    img.style.cursor = "pointer";

    img.onclick = function () {
        enteredtext.remove();
    };

    enteredtext.appendChild(img)

    document.getElementById("taskList").appendChild(enteredtext);

    document.getElementById('todolist').value = "";
}

btn_todo.addEventListener("click", add);