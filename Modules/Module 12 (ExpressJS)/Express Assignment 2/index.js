const express = require('express');
const app = express();
const port = 3000;

// Header HTML with navigation links
const header = `
    <header style="background-color: #f0f0f0; padding: 1rem; margin-bottom: 2rem;">
        <nav>
            <a href="/" style="margin-right: 1rem; text-decoration: none; color: #333;">Home</a>
            <a href="/display-name" style="margin-right: 1rem; text-decoration: none; color: #333;">Name</a>
            <a href="/display-food" style="margin-right: 1rem; text-decoration: none; color: #333;">Food</a>
            <a href="/display-vacation" style="text-decoration: none; color: #333;">Vacation</a>
        </nav>
    </header>
`;

// Route for the index page
app.get('/', (req, res) => {
    res.send(`
        ${header}
        <h1>INDEX</h1>
    `);
});

// Route to display name
app.get('/display-name', (req, res) => {
    res.send(`
        ${header}
        <h1>Jason Updegraff</h1>
    `);
});

// Route to display favorite food with image
app.get('/display-food', (req, res) => {
    res.send(`
        ${header}
        <h1>Sushi</h1>
        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500" alt="Sushi" style="max-width: 500px;">
    `);
});

// Route to display favorite vacation destination
app.get('/display-vacation', (req, res) => {
    res.send(`
        ${header}
        <h1>Okinawa, Japan</h1>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 