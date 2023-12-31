// Select the button element
let btn = document.querySelector("button");

// Select the list element
let list = document.querySelector("#List");

// Create an ordered list element
let olist = document.createElement("ol");
olist.classList.add("todos");
list.appendChild(olist);

// Select the input element
let inp = document.querySelector("input");
inp.classList.add("inp");

// Add a click event listener to the button
btn.addEventListener("click", function() {
   if (inp.value != '') {
      // Create a checkbox element
      let check = document.createElement("input");
      let todos = document.createElement("li");
      todos.classList.add("todos");

      // Set the type of the checkbox
      check.type = "checkbox";

      // Create a text node for the input value and append it to the todos element
      let text = document.createTextNode(inp.value);
      todos.appendChild(check);
      todos.appendChild(text);

      // Append the todo item to the ordered list
      olist.appendChild(todos);

      // Clear the input field
      inp.value = '';

      // Add a click event listener to the checkbox
      check.addEventListener("click" ,function() {
         // Add a class to the todo item
         todos.classList.add("todo_text");

         // Remove the todo item after 5 seconds
         setTimeout(() => {
            todos.remove();
         }, 5000);
      })
   }
});
