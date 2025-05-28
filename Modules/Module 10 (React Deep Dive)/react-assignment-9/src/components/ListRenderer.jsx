import React from 'react';

const ListRenderer = () => {
    const items = ["Apple", "Banana", "Orange"]
    return <div>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>;
};

export default ListRenderer;