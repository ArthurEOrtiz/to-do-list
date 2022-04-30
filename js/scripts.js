//Buisness Logic 
//Task List constructor 
function ToDoList() {
  this.tasks = {};
}

ToDoList.prototype.addTask = function(task) {
  this.tasks[task.title] = task;
};


//Task constructor 
function Task(title,description,priority,assignee,complete) {
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.assignee = assignee;
  this.complete = complete;
}

//UI Logic 
let toDo = new ToDoList;
  
function displayTasksList(taskListToDisplay){
  let toDoList = $("ol#toDoList");
  let htmlForList = "";

  Object.keys(taskListToDisplay.tasks).forEach(function(key) {
    const task = taskListToDisplay.tasks[key]
    htmlForList += "<li>" + task["title"] + task["description"] + "</li>";
    console.log(taskListToDisplay.tasks[key]);
  });
  toDoList.html(htmlForList);

  $("ol#toDoList").show();
}

$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
    const title = $("input#title").val();
    const description = $("input#description").val();
    const priority = $("input:radio[name=priority]:checked").val();
    const assignee = $("input#assignee").val();
    const complete = false;
  
    let newTask = new Task(title,description,priority,assignee,complete);
    
    toDo.addTask(newTask);

    console.log(toDo);
    displayTasksList(toDo);
    
  })
});
