import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function UsersIndex() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users')
      setUsers(res.data)
    } catch (err) {
      setUsers([])
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    await axios.delete(`http://localhost:5000/api/users/${id}`)
    setUsers(users.filter(u => u._id !== id))
  }

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>
                <Link to={`/users/${user._id}`}>{user.firstName} {user.lastName}</Link>
              </td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>
                <Link to={`/users/${user._id}`}>Show</Link>{' '}
                {' | '}
                <Link to={`/users/${user._id}/edit`}>Edit</Link>{' '}
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/users/new">Add a new user</Link>
    </div>
  )
}

export default UsersIndex 