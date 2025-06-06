import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts()
    }
  }, [isAuthenticated])

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts')
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAuthSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const endpoint = isLogin ? '/api/login' : '/api/register'
      const response = await axios.post(`http://localhost:5000${endpoint}`, formData)
      
      if (isLogin) {
        setCurrentUser(response.data.user)
        setIsAuthenticated(true)
      } else {
        setIsLogin(true)
        setFormData({ firstName: '', lastName: '', email: '', password: '' })
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred')
    }
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/posts', {
        content: newPost,
        userId: currentUser.id
      })
      setNewPost('')
      fetchPosts()
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
    setPosts([])
  }

  if (!isAuthenticated) {
    return (
      <div className="auth-container">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleAuthSubmit} className="auth-form">
          {!isLogin && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <button 
          className="toggle-auth"
          onClick={() => {
            setIsLogin(!isLogin)
            setError('')
            setFormData({ firstName: '', lastName: '', email: '', password: '' })
          }}
        >
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Welcome, {currentUser.firstName}!</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      
      <form onSubmit={handlePostSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          required
          className="post-input"
        />
        <button type="submit" className="submit-button">Create Post</button>
      </form>

      <div className="posts-container">
        <h2>News Feed</h2>
        {posts.map((post) => (
          <div key={post._id} className="post">
            <div className="post-header">
              <span className="post-author">
                {post.userId.firstName} {post.userId.lastName}
              </span>
              <span className="post-date">
                {new Date(post.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
