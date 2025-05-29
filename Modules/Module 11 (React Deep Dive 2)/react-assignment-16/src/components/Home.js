import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', description: 'This is the first item' },
  { id: 2, name: 'Item 2', description: 'This is the second item' },
  { id: 3, name: 'Item 3', description: 'This is the third item' },
  { id: 4, name: 'Item 4', description: 'This is the fourth item' },
  { id: 5, name: 'Item 5', description: 'This is the fifth item' }
];

function Home() {
  return (
    <div className="home">
      <h1>Items List</h1>
      <div className="items-list">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <h2>{item.name}</h2>
            <Link to={`/item/${item.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 