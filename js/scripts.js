+//Buisness Logic 
//Task constructor 
function Task(description,priority,assignee,complete) {
  this.description = description;
  this.priority = priority;
  this.assignee = assignee;
  this.complete = complete;
}
//UI Logic 

$(document).ready(function(){
  let taskList = [];
  
  $("#userInput").submit(function(event){
    event.preventDefault();
    const description = $("input#description").val();
    const priority = $("input:radio[name=priority]:checked").val();
    const assignee = $("input#assignee").val();
    const complete = false;
  
    let newTask = new Task(description,priority,assignee,complete);
    taskList.push(newTask);

    taskList.sort(function(a,b){
      return a.priority - b.priority;
    });

  $("#toDoList").text(`Task: ${taskList}`);
  
  

  console.log(taskList);
  })
});