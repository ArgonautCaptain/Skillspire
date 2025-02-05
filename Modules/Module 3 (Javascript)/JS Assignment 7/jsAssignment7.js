document.getElementById("userForm").addEventListener("submit", function (event) {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;

  let fullName = firstName + " " + lastName;

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h1>Name: ${fullName}</h1>
    <h1>Email: ${email}</h1>
    <h1>Age: ${age}</h1>
  `;

  event.preventDefault();
});