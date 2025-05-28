import React, { useState } from 'react';

const ConditionRenderer = () => {
    const [visible, setVisible] = useState(false);

    const visibleText = () => {
        return (
            <p>
                Component is visible
            </p>
        );
    };

    const hiddenText = () => {
        return (
            <p>
                Component is hidden
            </p>
        );
    };

    return (
        <div>
            {visible && visibleText()}
            {!visible && hiddenText()}
            <button onClick={() => setVisible(prevVisible => !prevVisible)}>Toggle</button>
        </div>
    );
};

export default ConditionRenderer;