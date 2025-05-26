import react from 'react';

const ElementRenderer = () => {
  return (
    <div className="element-renderer">
      <h1>Welcome to React</h1>
      <p>This is a paragraph.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Click here!</a>
    </div>
  );
};

export default ElementRenderer;