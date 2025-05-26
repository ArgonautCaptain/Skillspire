import React, { useState, useEffect } from 'react';

function ExtraComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Timer: {count}</p>;
}

export default ExtraComponent;