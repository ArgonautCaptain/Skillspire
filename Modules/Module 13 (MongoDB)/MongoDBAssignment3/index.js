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
let recipesCollection;

// Connect to MongoDB
async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        db = client.db('recipesDB');
        recipesCollection = db.collection('recipes');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

// Validation Middleware
const validateRecipe = (req, res, next) => {
    const { title, description, ingredients, instructions } = req.body;
    
    if (!title || !description || !ingredients || !instructions) {
        return res.status(400).json({ 
            error: 'Missing required fields. Please provide title, description, ingredients, and instructions' 
        });
    }
    
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
        return res.status(400).json({ 
            error: 'Ingredients must be a non-empty array' 
        });
    }

    if (!Array.isArray(instructions) || instructions.length === 0) {
        return res.status(400).json({ 
            error: 'Instructions must be a non-empty array' 
        });
    }
    
    next();
};

// Routes
// GET all recipes
app.get('/recipes', async (req, res) => {
    try {
        const recipes = await recipesCollection.find({}).toArray();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching recipes' });
    }
});

// GET recipe by ID
app.get('/recipes/:id', async (req, res) => {
    try {
        const recipe = await recipesCollection.findOne({ 
            _id: new ObjectId(req.params.id) 
        });
        
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching recipe' });
    }
});

// POST new recipe
app.post('/recipes', validateRecipe, async (req, res) => {
    try {
        const result = await recipesCollection.insertOne(req.body);
        res.status(201).json({
            message: 'Recipe added successfully',
            recipeId: result.insertedId
        });
    } catch (error) {
        res.status(500).json({ error: 'Error adding recipe' });
    }
});

// PUT update recipe
app.put('/recipes/:id', validateRecipe, async (req, res) => {
    try {
        const result = await recipesCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        
        res.json({ message: 'Recipe updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating recipe' });
    }
});

// DELETE recipe
app.delete('/recipes/:id', async (req, res) => {
    try {
        const result = await recipesCollection.deleteOne({ 
            _id: new ObjectId(req.params.id) 
        });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        
        res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting recipe' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
connectToMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
