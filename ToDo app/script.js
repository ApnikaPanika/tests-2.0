const inputLauks = document.querySelector('.taskInput');
const addButton = document.querySelector('.addTask');
const taskContainer = document.querySelector('.listContainer');

const taskArray = [];

addButton.addEventListener('click', () => {
    taskArray.push(inputLauks.value)

    inputLauks.value = ""

    showTasks()
})

const showTasks = () => {
    const uzdevumuSaraksts = taskArray.map((uzdevums, index) => {
        return `<div class="individualTask">${index + 1}. ${uzdevums}</div>`
    })

    taskContainer.innerHTML = uzdevumuSaraksts.join("")
}