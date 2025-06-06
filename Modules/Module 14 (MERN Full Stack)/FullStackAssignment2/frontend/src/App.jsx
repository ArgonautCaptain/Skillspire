import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [courses, setCourses] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [showConfirm, setShowConfirm] = useState(false)
  const [courseToDelete, setCourseToDelete] = useState(null)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses')
      setCourses(res.data)
    } catch (err) {
      console.error('Error fetching courses:', err)
    }
  }

  const handleAddCourse = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/courses', { name, description })
      setName('')
      setDescription('')
      fetchCourses()
    } catch (err) {
      console.error('Error adding course:', err)
    }
  }

  const handleRemoveClick = (course) => {
    setCourseToDelete(course)
    setShowConfirm(true)
  }

  const handleDeleteCourse = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${courseToDelete._id}`)
      setShowConfirm(false)
      setCourseToDelete(null)
      fetchCourses()
    } catch (err) {
      console.error('Error deleting course:', err)
    }
  }

  return (
    <div className="container">
      <h2>Add a new course</h2>
      <form onSubmit={handleAddCourse} className="course-form">
        <div className="course-form-row">
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="course-form-row">
          <label>Description:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <button type="submit" className="add-button">Add</button>
      </form>

      <h2>Courses</h2>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{new Date(course.createdAt).toLocaleString()}</td>
              <td>
                <button className="remove-link" onClick={() => handleRemoveClick(course)}>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfirm && courseToDelete && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Are you sure you want to delete the following course?</h3>
            <p><strong>Name:</strong> {courseToDelete.name}</p>
            <p><strong>Description:</strong> {courseToDelete.description}</p>
            <div className="modal-actions">
              <button onClick={() => setShowConfirm(false)}>No</button>
              <button className="delete-button" onClick={handleDeleteCourse}>Yes! I want to delete this</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
