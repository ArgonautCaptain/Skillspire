const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Fiction"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction"
    }
];

const validateBook = (req, res, next) => {
    const { title, author, year, genre } = req.body;
    
    if (!title || !author || !year || !genre) {
        return res.status(400).json({
            error: "Missing required fields. Please provide title, author, year, and genre."
        });
    }

    if (typeof year !== 'number' || year < 0 || year > new Date().getFullYear()) {
        return res.status(400).json({
            error: "Invalid year. Please provide a valid year."
        });
    }

    next();
};

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET book by ID
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
});

// POST new book
app.post('/books', validateBook, (req, res) => {
    const newBook = {
        id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
        ...req.body
    };
    books.push(newBook);
    res.status(201).json(newBook);1
});

// PUT update book
app.put('/books/:id', validateBook, (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    const updatedBook = {
        id: parseInt(req.params.id),
        ...req.body
    };
    
    books[bookIndex] = updatedBook;
    res.status(200).json(updatedBook);
}); 

// DELETE book
app.delete('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    const deletedBook = books[bookIndex];
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.json(deletedBook);
}); 

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 