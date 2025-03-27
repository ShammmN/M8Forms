    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message


const input = document.getElementById("inputField")
const form = document.getElementById("myForm")
const button = document.getElementById("button")

button.addEventListener("click", function(event){
  if (!/^[a-zA-Z0-9]+$/.test(input.value)) {
    input.setCustomValidity("Your input is not alphanumeric")
  }
  
  else {
    input.setCustomValidity("Submission confirmed")
  }
})










