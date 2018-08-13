var Task = /** @class */ (function () {
    function Task(descriptionParameter, priorityParameter) {
        this.descriptionParameter = descriptionParameter;
        this.priorityParameter = priorityParameter;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task('Pet the dog.', 'High'));
tasks.push(new Task('Hug the dog.', 'Low'));
tasks.push(new Task('Feed the dog.', 'Medium'));
tasks.push(new Task('Take dog outside.', 'High'));
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
console.log("break before marking done");
tasks[0].markDone();
for (var _a = 0, tasks_2 = tasks; _a < tasks_2.length; _a++) {
    var task = tasks_2[_a];
    console.log(task);
}
