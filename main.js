
document.querySelector("#push").onclick = function () {
    var newTask = document.querySelector("#new-task input").value;
    var task = document.querySelector("#task");
    if (newTask.length == 0) {
        alert("Please Enter a Task ");
    } else {
        task.innerHTML += `
        <div class="task">
        <span id="task-name">${newTask}</span>
        <button class="delete"><i class='bx bxs-trash-alt'></i></button>
        </div> `
    }
    var curentTask = document.querySelectorAll(".delete ");
    for (var i = 0; i < curentTask.length; i++) {
        curentTask[i].onclick = function () {
            this.parentElement.remove();
        }
    }
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
            this.classList.toggle("completed");
        }
    }
}
