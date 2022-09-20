import React from 'react';
import './index.scss';

function App() {
  const [count, setCount] = React.useState(0);
  const onPlusClick = () => {
    setCount(count + 1)
  }
  const onMinusClick = () => {
    setCount(count - 1)
  }
  

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onMinusClick} className="minus">- Минус</button>
        <button onClick={onPlusClick} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
