import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count changed to: ", count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Counter;