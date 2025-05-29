import React, { useEffect,useState } from 'react';

const App = () => {

  const [address, setAddress] = useState({
    phoneNumber: "978-435-1780",
    address: {
      houseNumber: "E-142/10",
      street: "Street 50",
      district: "Garden Town",
      city: "Karachi",
    },
  });


  const changeAddressState = () => {
    setAddress({
      phoneNumber: "978-435-1780",
      address: {
        houseNumber: "R-214",
        street: "Street 50",
        district: "Garden Town",
        city: "Karachi",
      },
    })
  }

  const [title, setTitle] = useState(0);

  useEffect(() => {
    if(title != null) {
      document.title = title;
    }
  }, [title]);


  return (
    <>
      <div>
        <button onClick={changeAddressState}>Update state</button>
        <div>State: {JSON.stringify(address)}</div>
      </div>
      <br />
      <div>
        Condition used inside a Hook
        <button onClick={() => setTitle(prevTitle => prevTitle + 1)}>+1</button>
      </div>
    </>
  );

};

export default App;