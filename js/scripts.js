//Buisness Logic 
//Task List constructor 
function ToDoList() {
  this.tasks = {};
}

ToDoList.prototype.addTask = function(task) {
  this.tasks[task.title] = task;
};

//Complete Tasks

ToDoList.prototype.completeTask = function(task) {
  
};

//Task constructor 
function Task(title, description, priority, assignee, complete) {
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.assignee = assignee;
  this.complete = complete;
}

//UI Logic 
function displayTasksList(taskListToDisplay){
  let toDoList = $("#toDoList");
  let htmlForList = "";

  htmlForList = Object.keys(taskListToDisplay.tasks).map(function (key) {
    const task = taskListToDisplay.tasks[key];
    return `<li><h4>${task.title}</h4><p>${task.description}</p><p>Priority: ${task.priority}</p><p>Assigned To: ${task.assignee}</p><button type="complete" class"btn btn-dark">COMPLETE TASK</button></li>`;
  }).join();

  toDoList.html(htmlForList);

  $("#toDoList").show();
}

$(document).ready(function(){

  let toDo = new ToDoList;
  
  $("#userInput").submit(function(event){
    event.preventDefault();
    const title = $("#title").val();
    const description = $("#description").val();
    const priority = $("input:radio[name=priority]:checked").val();
    const assignee = $("#assignee").val();
    const complete = false;
  
    let newTask = new Task(title,description,priority,assignee,complete);
    
    toDo.addTask(newTask);

    console.log(toDo);
    displayTasksList(toDo);
    
  })
});
