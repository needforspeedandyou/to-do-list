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

        // const doneButton = document.createElement("button")
        // doneButton.setAttribute("class", "green")
        // doneButton.innerHTML = "Done"
        // buttonContainer.appendChild(doneButton)

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

// addButton.addEventListener("click", () => {
//     const taskName = document.getElementById("taskText").value
//     console.log(tasks)

//     const task = document.createElement("li")
//     task.setAttribute("class", "task")
//     task.innerHTML = `<p>${taskName}</p><span><button id='deleteButton' class='red'>Delete</button><button id='doneButton' class='green'>Done</button></span>`
//     taskList.appendChild(task)

//     const deleteButton = document.getElementById("deleteButton")
//     deleteButton.addEventListener("click", () => {
//         var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//         localStorage.setItem('tasks', JSON.stringify(tasks))


//     })

//     tasks.push(taskName)
//     localStorage.setItem("tasks", JSON.stringify(tasks))

//     console.log(localStorage.getItem("tasks"))
// })

// window.addEventListener("DOMContentLoaded", () => {
//     var tasks = JSON.parse(localStorage.getItem("tasks")) || []

//     tasks.forEach(element => {
//         const task = document.createElement("li")
//         task.setAttribute("class", "task")
//         task.innerHTML = `<p>${element}</p><span><button id='deleteButton' class='red'>Delete</button><button id='doneButton' class='green'>Done</button></span>`
//         taskList.appendChild(task)

//         const deleteButton = document.getElementById("deleteButton")
//         deleteButton.addEventListener("click", () => {
//             var taskID = tasks.indexOf(element)
//             tasks.splice(taskID, 1)
//             localStorage.setItem('tasks', JSON.stringify(tasks))
//             console.log("asdasd")
//         })
//     });
// })