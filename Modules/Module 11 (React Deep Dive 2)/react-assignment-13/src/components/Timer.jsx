import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            Timer: {seconds} seconds
        </div>
    )
};

export default Timer;

