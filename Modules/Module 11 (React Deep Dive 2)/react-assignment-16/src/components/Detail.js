import React from 'react';
import { useParams, Link } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', description: 'This is the first item' },
  { id: 2, name: 'Item 2', description: 'This is the second item' },
  { id: 3, name: 'Item 3', description: 'This is the third item' },
  { id: 4, name: 'Item 4', description: 'This is the fourth item' },
  { id: 5, name: 'Item 5', description: 'This is the fifth item' }
];

function Detail() {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="detail">
        <h1>Item not found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="detail">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

export default Detail; 