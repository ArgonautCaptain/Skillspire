import react from 'react';

const ClickButton = () => {

  const onClick = () => {
    console.log('Hello World');
  };

  const label = 'Click Me!';

  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default ClickButton;