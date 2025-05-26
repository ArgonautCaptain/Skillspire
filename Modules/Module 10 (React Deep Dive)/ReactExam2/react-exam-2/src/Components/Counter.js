import react, { useState } from 'react';

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(prevCounter => prevCounter + 1);

  const decrement = () => setCounter(prevCounter => prevCounter - 1);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Current Counter Value: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
