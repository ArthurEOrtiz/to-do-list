//Buisness Logic 
//Task List constructor 
function TaskList() {
  this.tasks = {};
}

TaskList.prototype.addTask = function(task) {
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
let taskList = new TaskList;
  
function displayTasksList(taskListToDisplay){
  let taskList = $("ol#toDoList");
  let htmlForList = "";

  Object.keys(taskListToDisplay.tasks).forEach(function(key) {
    const task = taskListToDisplay.key;
    htmlForList += "<li>" + task[key] +"</li>";
  });
  taskList.html(htmlForList);

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
    
    taskList.addTask(newTask);
    
    /*
    taskList.sort(function(a,b){
      return a.tasks.priority - b.tasks.priority;
    });

    */


    console.log(taskList.tasks);
    displayTasksList(taskList);
    

  })
});
