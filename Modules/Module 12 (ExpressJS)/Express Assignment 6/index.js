const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "egg", "parmesan", "bacon"],
        instructions: "Boil the spaghetti. Cook the bacon. Mix the egg and parmesan. Serve the spaghetti with the bacon and egg mixture."
    },   
]

const validateRecipe = (req, res, next) => {
    const { name, ingredients, instructions } = req.body;

    if (!name || !ingredients || !instructions) {
        return res.status(400).json({ error: "Missing required fields. Please provide name, ingredients, and instructions." });
    }

    if (typeof ingredients !== 'object' || !Array.isArray(ingredients)) {
        return res.status(400).json({ error: "Ingredients must be an array." });
    }

    next();
};

// GET all recipes
app.get('/recipes', (req, res) => {
    res.json(recipes);
});

// GET recipe by ID
app.get('/recipes/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
    }
    res.json(recipe);
});

// POST new recipe
app.post('/recipes', validateRecipe, (req, res) => {
    const newRecipe = {
        id: recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1,
        ...req.body
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

// PUT update recipe
app.put('/recipes/:id', validateRecipe, (req, res) => {
    const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));
    if (recipeIndex === -1) {
        return res.status(404).json({ error: "Recipe not found" });
    }
    const updatedRecipe = {
        id: parseInt(req.params.id),
        ...req.body
    };

    recipes[recipeIndex] = updatedRecipe;
    res.status(200).json(updatedRecipe);
});

// DELETE recipe
app.delete('/recipes/:id', (req, res) => {
    const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));
    if (recipeIndex === -1) {
        return res.status(404).json({ error: "Recipe not found" });
    }
    const deletedRecipe = recipes[recipeIndex];
    recipes = recipes.filter(r => r.id !== parseInt(req.params.id));
    res.json(deletedRecipe);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});