document.getElementById("userForm").addEventListener("submit", function (event) {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;

  var fullName = firstName + " " + lastName;

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h1>Name: ${fullName}</h1>
    <h1>Email: ${email}</h1>
    <h1>Age: ${age}</h1>
  `;

  event.preventDefault();
});