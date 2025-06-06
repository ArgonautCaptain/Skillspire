const express = require('express');
const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection URL (replace with your actual connection string)
const uri = "mongodb+srv://skillSpireUser:skillSpirePassword@mongodbassignment1clust.ujnqvw8.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBAssignment1Cluster";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// Database and Collection
let db;
let booksCollection;

// Connect to MongoDB
async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        db = client.db('booksDB');
        booksCollection = db.collection('books');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

// Validation Middleware
const validateBook = (req, res, next) => {
    const { title, author, year, isbn } = req.body;
    
    if (!title || !author || !year || !isbn) {
        return res.status(400).json({ 
            error: 'Missing required fields. Please provide title, author, year, and isbn' 
        });
    }
    
    if (typeof year !== 'number' || year < 0) {
        return res.status(400).json({ 
            error: 'Year must be a positive number' 
        });
    }

    if (typeof isbn !== 'string' || isbn.length !== 10) {
        return res.status(400).json({ 
            error: 'ISBN-10 must be a 10-digit string' 
        });
    }
    
    next();
};

// Routes
// GET all books
app.get('/books', async (req, res) => {
    try {
        const books = await booksCollection.find({}).toArray();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching books' });
    }
});

// GET book by ID
app.get('/books/:id', async (req, res) => {
    try {
        const book = await booksCollection.findOne({ 
            _id: new ObjectId(req.params.id) 
        });
        
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching book' });
    }
});

// POST new book
app.post('/books', validateBook, async (req, res) => {
    try {
        const result = await booksCollection.insertOne(req.body);
        res.status(201).json({
            message: 'Book added successfully',
            bookId: result.insertedId
        });
    } catch (error) {
        res.status(500).json({ error: 'Error adding book' });
    }
});

// PUT update book
app.put('/books/:id', validateBook, async (req, res) => {
    try {
        const result = await booksCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        
        res.json({ message: 'Book updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating book' });
    }
});

// DELETE book
app.delete('/books/:id', async (req, res) => {
    try {
        const result = await booksCollection.deleteOne({ 
            _id: new ObjectId(req.params.id) 
        });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting book' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
connectToMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
