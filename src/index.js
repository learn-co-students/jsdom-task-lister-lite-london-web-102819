document.addEventListener("DOMContentLoaded", () => {


  document.addEventListener("submit", function(event) {
    event.preventDefault();
    let submit = document.body.querySelector("#submit");
    let text = document.body.querySelector("#new-task-description");
    let node = document.createElement("LI");
    let string = text.value + " "
    let textNode = document.createTextNode(string);
    let buttonNode = document.createElement("BUTTON")
    buttonNode.innerText = "X"
    buttonNode.id = string
    node.appendChild(textNode);
    node.appendChild(buttonNode);
    document.body.querySelector("#tasks").appendChild(node);
    buttonNode.addEventListener("click", function(e) {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  });



  // document.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   let clear = document.body.querySelector("#delete");
  //   let text = document.body.querySelector("#new-task-description");
  //   let node = document.createElement("LI");
  //   let textNode = document.createTextNode(text.value);
  //   node.appendChild(textNode);
  //   document.body.querySelector("#tasks").appendChild(node);
  // });
  
});


