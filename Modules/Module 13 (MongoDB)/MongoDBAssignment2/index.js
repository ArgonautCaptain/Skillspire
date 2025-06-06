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
let todosCollection;

// Connect to MongoDB
async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        db = client.db('todosDB');
        todosCollection = db.collection('todos');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

// Validation middleware
const validateTodo = (req, res, next) => {
    const { title, description, completed } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed status must be a boolean' });
    }
    next();
};

// Routes
// GET all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await todosCollection.find({}).toArray();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching todos' });
    }
});

// GET todo by ID
app.get('/todos/:id', async (req, res) => {
    try {
        const todo = await todosCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching todo' });
    }
});

// POST new todo
app.post('/todos', validateTodo, async (req, res) => {
    try {
        const newTodo = {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed || false,
            createdAt: new Date()
        };
        const result = await todosCollection.insertOne(newTodo);
        res.status(201).json({ ...newTodo, _id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'Error creating todo' });
    }
});

// PUT update todo
app.put('/todos/:id', validateTodo, async (req, res) => {
    try {
        const updateData = {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
            updatedAt: new Date()
        };
        const result = await todosCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: updateData }
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json({ message: 'Todo updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating todo' });
    }
});

// DELETE todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const result = await todosCollection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting todo' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
connectToMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});