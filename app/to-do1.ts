class Task {
  done: boolean = false;
  constructor(public descriptionParameter: string, public priorityParameter: string){}
  markDone(){
    this.done = true;
  }
}

let tasks: Task[] = [];
tasks.push(new Task('Pet the dog.', 'High'));
tasks.push(new Task('Hug the dog.', 'Low'));
tasks.push(new Task('Feed the dog.', 'Medium'));
tasks.push(new Task('Take dog outside.', 'High'));

for(let task of tasks){
  console.log(task);
}
console.log("break before marking done");
tasks[0].markDone();
for(let task of tasks){
  console.log(task)
}
