const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection string - update DB to coursesDB
const connectionString = "mongodb+srv://skillSpireUser:skillSpirePassword@mongodbassignment1clust.ujnqvw8.mongodb.net/coursesDB?retryWrites=true&w=majority&appName=MongoDBAssignment1Cluster";

// Course Schema
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Course = mongoose.model('Course', courseSchema);

// Get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new course
app.post('/api/courses', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCourse = new Course({ name, description });
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a course by ID
app.delete('/api/courses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted', course: deletedCourse });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
