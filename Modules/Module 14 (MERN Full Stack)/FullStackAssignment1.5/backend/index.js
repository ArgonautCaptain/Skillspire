const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection string
const connectionString = "mongodb+srv://skillSpireUser:skillSpirePassword@mongodbassignment1clust.ujnqvw8.mongodb.net/usersDB?retryWrites=true&w=majority&appName=MongoDBAssignment1Cluster";

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number,
  dietaryPreference: {
    type: String,
    enum: ['Vegetarian', 'Vegan', 'No preference']
  },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      height: req.body.height,
      weight: req.body.weight,
      dietaryPreference: req.body.dietaryPreference
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Connect to MongoDB and start server
mongoose.connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
