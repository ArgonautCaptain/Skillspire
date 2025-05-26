import react, { useState, useEffect } from 'react';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="random-number-generator">
      <h1>Random Number Generator</h1>
      <h2>{randomNumber}</h2>
      <p className="notes">This number will update every 3 seconds.</p>
    </div>
  );
};

export default RandomNumberGenerator;