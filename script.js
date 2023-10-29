function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskValue = taskInput.value;
  if (taskValue) {
      var ul = document.getElementById("tasks");
      var li = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(taskValue));
      var deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("Delete"));
      deleteButton.setAttribute("class", "delete-btn");
      deleteButton.onclick = function() {
          this.parentNode.remove();
      };
      li.appendChild(deleteButton);
      ul.appendChild(li);
      taskInput.value = "";
  } else {
      alert("Please enter a task!");
  }
}
