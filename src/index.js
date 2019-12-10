document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.addEventListener("submit", function(event) {
    event.preventDefault();
    // let submitButton = document.body.querySelector("#submit");
    let form = document.body.querySelector("#new-task-description");
    let taskText = form.value;
    let node = document.createElement("li");
    let textNode = document.createTextNode(taskText + " ");
    let priority = document.body.querySelector("#priority").value;

    // add delete button.
    let buttonNode = document.createElement("button");
    buttonNode.innerText = "X";

    // append text to <li> and <li> to task list.
    node.appendChild(textNode);
    node.appendChild(buttonNode);
    document.body.querySelector("#tasks").appendChild(node);

    // add delete event on click to remove task.
    buttonNode.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });

    //assign color based on priority
    if (priority == "Low") {
      node.style.color = "green";
    } else if (priority == "Medium") {
      node.style.color = "orange";
    } else if (priority == "High") {
      node.style.color = "red";
    }
  });

  // let deleteButton = document.body.querySelector("#deleteButton");

  // deleteButton.addEventListener("click", function(event) {});
});
