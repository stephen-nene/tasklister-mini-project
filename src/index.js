document.addEventListener("DOMContentLoaded", () => {

    //inputs
    const createdTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");
    
    // where the new tasks at
    
    const newTasks = document.getElementById("tasks");
    
    createdTaskForm.addEventListener("submit", spawnTaskForm, );
    });
    
     spawnTaskForm = event => {
      event.preventDefault();
      const newTaskDescription = document.getElementById("new-task-description");
      const anotherTask = document.createElement("li")
      anotherTask.innerHTML = newTaskDescription.value;
    
    
    appendAnotherTask(anotherTask);
      event.target.reset();
    };
    
    const appendNewestTask = task => {
      document.getElementById('tasks').appendChild(task);
    };

