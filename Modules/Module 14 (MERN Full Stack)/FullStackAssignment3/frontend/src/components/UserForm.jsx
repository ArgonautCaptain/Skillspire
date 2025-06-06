import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function UserForm({ mode }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' })

  useEffect(() => {
    if (mode === 'edit') {
      fetchUser()
    }
  }, [mode, id])

  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`)
      setForm({ firstName: res.data.firstName, lastName: res.data.lastName, email: res.data.email })
    } catch (err) {
      setForm({ firstName: '', lastName: '', email: '' })
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (mode === 'new') {
      await axios.post('http://localhost:5000/api/users', form)
    } else {
      await axios.put(`http://localhost:5000/api/users/${id}`, form)
    }
    navigate('/users')
  }

  return (
    <div>
      <h2>{mode === 'new' ? 'Add a new user' : `Edit User ${id}`}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First name:</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last name:</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" value={form.email} onChange={handleChange} required />
        </div>
        <button type="submit">{mode === 'new' ? 'Create' : 'Update'}</button>
      </form>
      {mode === 'edit' && (
        <>
          <br />
          <Link to={`/users/${id}`}>Show</Link> | <Link to="/users">Go Back</Link>
        </>
      )}
      {mode === 'new' && (
        <>
          <br />
          <Link to="/users">Go Back</Link>
        </>
      )}
    </div>
  )
}

export default UserForm 