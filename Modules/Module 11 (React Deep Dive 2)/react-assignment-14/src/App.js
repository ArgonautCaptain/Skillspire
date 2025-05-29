import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialPosts = [
    {
      id: 1,
      title: "Hello World",
    },
    {
      id: 2,
      title: "Introduction to React",
    },
    {
      id: 3,
      title: "Using useEffect and useState",
    }
  ];

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from an external source
    const timer = setTimeout(() => {
      setPosts(initialPosts);
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts List</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="posts-container">
            {posts.map(post => (
              <div key={post.id} className="post-item">
                <span>{post.title}</span>
                <button 
                  onClick={() => handleDeletePost(post.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
