const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [
    {
        id: 1,
        title: "Buy groceries",
        description: "Eggs, milk, bread, and cheese",
        completed: false
    },
    {
        id: 2,
        title: "Finish the project",
        description: "Complete the project by the end of the week",
        completed: false
    }
];

const validateTodo = (req, res, next) => {
    const { title, description, completed } = req.body;

    if (!title || !description || completed === undefined) {
        return res.status(400).json({
            error: "Missing required fields. Please provide title, description, and completed."
        });
    }

    if (typeof completed !== 'boolean') {
        return res.status(400).json({
            error: "Completed must be a boolean value."
        });
    }

    next();
};

// GET all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// GET todo by ID
app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
});

// POST new todo
app.post('/todos', validateTodo, (req, res) => {
    const newTodo = {
        id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
        ...req.body
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT update todo
app.put('/todos/:id', validateTodo, (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    const updatedTodo = {
        id: parseInt(req.params.id),
        ...req.body
    };

    todos[todoIndex] = updatedTodo;
    res.status(200).json(updatedTodo);
});

// DELETE todo
app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }
    const deletedTodo = todos[todoIndex];
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    res.json(deletedTodo);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});