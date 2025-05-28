import React from 'react';

const EventHandler = () => {
    
    const handleClick = () => {
        console.log('Button clicked');
        alert('Button clicked');
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default EventHandler;