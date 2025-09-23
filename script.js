'use strict'

const addTaskButton = document.getElementById("addTask")
const taskList = document.getElementById("taskList")
const doneList = document.getElementById("doneList")

addTaskButton.addEventListener("click", () => {
    const taskName = document.getElementById("taskText").value

    const task = document.createElement("li")
    task.setAttribute("class", "task")
    task.innerHTML = `<p>${taskName}</p><span><button id='deleteButton' class='red'>Delete</button><button id='doneButton' class='green'>Done</button></span>`

    var deleteButton = task.querySelector("#deleteButton")
    var doneButton = task.querySelector("#doneButton")

    deleteButton.addEventListener("click", () => {
        task.remove()
    })

    doneButton.addEventListener("click", () => {
        task.setAttribute("class", "done task")
    })

    taskList.appendChild(task)


})






