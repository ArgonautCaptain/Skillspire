import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

function UserShow() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
  }, [id])

  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`)
      setUser(res.data)
    } catch (err) {
      setUser(null)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    await axios.delete(`http://localhost:5000/api/users/${id}`)
    navigate('/users')
  }

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h2>User {user._id}</h2>
      <p><b>Full Name:</b> {user.firstName} {user.lastName}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Created at:</b> {new Date(user.createdAt).toLocaleDateString()}</p>
      <Link to={`/users/${user._id}/edit`}>Edit</Link> |{' '}
      <button onClick={handleDelete}>Delete</button>
      <br /><br />
      <Link to="/users">Go Back</Link>
    </div>
  )
}

export default UserShow 