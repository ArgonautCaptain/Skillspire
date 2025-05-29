const express = require('express');
const app = express();
const port = 3000;

// Personal information
const personalInfo = {
    firstName: "Jason",
    lastName: "Updegraff",
    favoriteFood: "Sushi",
    favoriteVacationDestination: "Okinawa, Japan"
};

// Route to display personal information
app.get('/', (req, res) => {
    res.send(`
        <h1>Personal Information</h1>
        <ul>
            <li>First Name: ${personalInfo.firstName}</li>
            <li>Last Name: ${personalInfo.lastName}</li>
            <li>Favorite Food: ${personalInfo.favoriteFood}</li>
            <li>Favorite Vacation Destination: ${personalInfo.favoriteVacationDestination}</li>
        </ul>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 