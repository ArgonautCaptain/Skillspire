const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection string
const connectionString = "mongodb+srv://skillSpireUser:skillSpirePassword@mongodbassignment1clust.ujnqvw8.mongodb.net/registeredUsersDB?retryWrites=true&w=majority&appName=MongoDBAssignment1Cluster";

// User Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Post Schema
const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// Validation middleware
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Routes
// Register
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validation
    if (!firstName || firstName.length < 2) {
      return res.status(400).json({ message: 'First name must be at least 2 characters long' });
    }
    if (!lastName || lastName.length < 2) {
      return res.status(400).json({ message: 'Last name must be at least 2 characters long' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.json({ 
      message: 'Login successful',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Posts routes
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('userId', 'firstName lastName')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const { content, userId } = req.body;
    const newPost = new Post({
      content,
      userId
    });
    const savedPost = await newPost.save();
    const populatedPost = await Post.findById(savedPost._id)
      .populate('userId', 'firstName lastName');
    res.status(201).json(populatedPost);
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

