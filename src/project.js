import Task from "./task";

function Project(name) {
    this.name = name;
    this.tasks = [];
}

Project.prototype.addTask = function (title, description, date, priority) {
    const task = new Task(title, description, date, priority)
    this.tasks.push(task);
    this.tasks.sort((a, b) => a.date - b.date);
}

Project.prototype.removeTask = function (taskToRemove) {
    const index = this.tasks.indexOf(taskToRemove);
    if (index !== -1) {
        this.tasks.splice(index, 1);
    }
}

Project.prototype.setComplete = function (taskToComplete) {
    taskToComplete.markAsCompleted();
}

Project.prototype.changePriority = function (newPriority, taskToChange) {
    taskToChange.changePriority(newPriority);
}

export default Project;