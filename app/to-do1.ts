class Task {
  done: boolean = false;
  constructor(public descriptionParameter: string, public priorityParameter: string){}
}

var tasks: Task[] = [];
tasks.push(new Task('Pet the dog.', 'High'));
tasks.push(new Task('Hug the dog.', 'Low'));
tasks.push(new Task('Feed the dog.', 'Medium'));
tasks.push(new Task('Take dog outside.', 'High'));
console.log(tasks);
