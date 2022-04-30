//Buisness Logic 
//Task List constructor 
function ToDoList() {
  this.tasks = {};
}

ToDoList.prototype.addTask = function(task) {
  this.tasks[task.title] = task;
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
let toDo = new ToDoList;
  
function displayTasksList(taskListToDisplay){
  let toDoList = $("#toDoList");
  let htmlForList = "";

  // Object.keys(taskListToDisplay.tasks).forEach(function(key) {
  //   const task = taskListToDisplay.tasks[key];
  //   //htmlForList += "<li><h3>" + task["title"] + "</h3>" + task["description"] + "</li>";
  //   htmlForList += `<li><h3>${task.title}</h3>${task.description}</li>`;
  //   console.log(taskListToDisplay.tasks[key]);
  // });
  // toDoList.html(htmlForList);

  htmlForList = Object.keys(taskListToDisplay.tasks).map(function (key) {
    const task = taskListToDisplay.tasks[key];
    //htmlForList += "<li><h3>" + task["title"] + "</h3>" + task["description"] + "</li>";
    return `<li><h3>${task.title}</h3>${task.description}</li>`;
  }).join();
  toDoList.html(htmlForList);

  $("#toDoList").show();
}

$(document).ready(function(){
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
