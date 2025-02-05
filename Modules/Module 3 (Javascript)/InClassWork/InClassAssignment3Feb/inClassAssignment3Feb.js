var contacts = ["Jon Snow", "Arya Stark", "Tyrion Lannister"];

function addContact(name) {
    contacts.push(name);
    console.log("Contact added successfully: " + name);
}

function displayContacts() {
    console.log("List of contacts: ");
    for (let index = 0; index < contacts.length; index++) {
        console.log(contacts[index]);
    }
}

addContact("Sansa Stark");
addContact("Daenerys Targaryen");
displayContacts();