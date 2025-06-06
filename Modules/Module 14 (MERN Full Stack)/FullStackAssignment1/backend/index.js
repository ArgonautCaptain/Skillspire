const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection string - replace with your actual connection string
const connectionString = "mongodb+srv://skillSpireUser:skillSpirePassword@mongodbassignment1clust.ujnqvw8.mongodb.net/postsDB?retryWrites=true&w=majority&appName=MongoDBAssignment1Cluster";

// Post Schema
const postSchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

// Routes
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const newPost = new Post({
      content: req.body.content
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
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
