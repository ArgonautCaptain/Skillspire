import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

  // Fetch posts when component mounts
  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts')
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/posts', {
        content: newPost
      })
      setNewPost('')
      fetchPosts()
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <div className="container">
      <h1>Post Creator</h1>
      
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write your post here..."
          required
          className="post-input"
        />
        <button type="submit" className="submit-button">Create Post</button>
      </form>

      <div className="posts-container">
        <h2>Posts</h2>
        {posts.map((post) => (
          <div key={post._id} className="post">
            <p>{post.content}</p>
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
