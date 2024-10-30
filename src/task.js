function Task(title, description, date, priority = "low", note = "") {
    this.id = Math.random().toString(36).substr(2, 9);
    this.title = title;
    this.description = description;
    this._date = new Date(date).getTime();
    this.priority = priority;
    this.completed = false;
}

Task.prototype.markAsCompleted = function () {
    this.completed = !this.completed;
};

Task.prototype.changePriority = function (newPriority) {
    const validPriorities = ["low", "medium", "high"];
    if (validPriorities.includes(newPriority)) {
        this.priority = newPriority;
    } else {
        console.error("Invalid priority. Must be 'low', 'medium', or 'high'.");
    }
};

Object.defineProperty(Task.prototype, "date", {
    set: function (value) {
        this._date = new Date(value).getTime();
    },
    get: function () {
        return this._date;
    },

});

Task.prototype.prettyDate = function () {
    return new Date(this._date).toDateString();
}

export default Task;