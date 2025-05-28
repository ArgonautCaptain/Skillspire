import React from 'react';

const ChildComponent = (props) => {
    return <div>
        <h2>Child Component</h2>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Age: {props.age}</p>
    </div>;
};

export default ChildComponent;