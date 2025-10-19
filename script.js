'use strict'

const taskList = document.getElementById("taskList")
const addButton = document.getElementById("addTask")

function renderTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || []
    taskList.innerHTML = ""

    tasks.forEach((element, index) => {
        const task = document.createElement("li")
        task.setAttribute("class", "task")
        task.innerHTML = `<p>${element}</p>`
        const buttonContainer = document.createElement("span")
        taskList.appendChild(task)
        task.appendChild(buttonContainer)

        const deleteButton = document.createElement("button")
        deleteButton.setAttribute("class", "red")
        deleteButton.innerHTML = "Delete"
        buttonContainer.appendChild(deleteButton)

        deleteButton.addEventListener("click", () => deleteTask(index))
    });
}

function addTask() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || []

    const inputValue = document.getElementById("taskText").value
    if (inputValue.trim() === "") return;
    tasks.push(inputValue)
    localStorage.setItem("tasks", JSON.stringify(tasks))

    renderTasks()
}

function deleteTask(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || []

    tasks.splice(index, 1)

    localStorage.setItem("tasks", JSON.stringify(tasks))
    renderTasks()
}

function doneTask(index) {

}

addButton.addEventListener("click", () => addTask())

renderTasks()
