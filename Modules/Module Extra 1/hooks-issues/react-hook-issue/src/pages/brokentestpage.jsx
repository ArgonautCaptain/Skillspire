import React, { useState, useEffect } from 'react';
import ExtraComponent from '../components/extracomponent';

function BrokenTestPage() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>Toggle: {toggle ? "on" : "off"} </p>
      {toggle && <ExtraComponent />}

    </div>
  );
}

export default BrokenTestPage;
