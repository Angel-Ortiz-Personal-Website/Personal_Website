document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  if (name.value.trim() === "" || email.value.trim() === "") {
    alert("Fill in the requested information.");
    return;
  }

  // alert dialogue box that form is submitted successfully
  alert("Succesfully submitted");
});
