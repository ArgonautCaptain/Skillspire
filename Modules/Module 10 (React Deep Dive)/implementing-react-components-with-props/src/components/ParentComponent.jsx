import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    return <div>
        <h1>Parent Component</h1>
        <ChildComponent firstName="John" lastName="Smith" age={16} />
    </div>;
};

export default ParentComponent;