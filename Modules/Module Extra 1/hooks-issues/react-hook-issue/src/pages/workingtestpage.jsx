import React, { useState, useEffect } from 'react';

const WorkingTestPage = () => {
  function ExampleComponent({ showExtra }) {
    const [count, setCount] = useState(0);
    const [isExtraVisible, setIsExtraVisible] = useState(count > 5);

    useEffect(() => {
      // Sync visibility with the count state
      setIsExtraVisible(count > 5);
    }, [count]);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {isExtraVisible && <ExtraComponent />}
      </div>
    );
  };

  function ExtraComponent() {
    const [extraCount, setExtraCount] = useState(0);

    useEffect(() => {
      console.log('ExtraComponent rendered');
    }, [extraCount]);

    return (
      <div>
        <p>Extra count: {extraCount}</p>
        <button onClick={() => setExtraCount(extraCount + 1)}>Increment Extra Count</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Test Page</h1>
      <ExampleComponent />
    </div>
  );
}

export default WorkingTestPage;