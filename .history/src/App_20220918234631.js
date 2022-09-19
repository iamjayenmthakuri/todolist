import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increaseNumber = () => {
    setCount(count + 1);
  }
  const decreaseNumber = () => {
    setCount(count - 1);
  }
  const backToCount = () => {
    setCount(count == 0);
  }
  const [showText, setShowText] = useState(true);

  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  }
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const [textColor, setTextColor] = useState("black");
  return (
    <>
      {count}
      <button onClick={increaseNumber}>increaseNumber</button>
      <button onClick={decreaseNumber}>DecreaseNumber</button>
      <button onClick={backToCount}>backToCount</button>




      <button onClick={() => {
        setShowText(!showText);
      }}>
        show/hide
      </button>
      <button onClick={() => {
        setTextColor(textColor === "black" ? "red" : "black");
      }}>change color


      </button>
      <h1 style={{ color: textColor }}> Jayen</h1>

      {showText && <h1>My Name is Jayen</h1>}

      <input type="text" onChange={handleInputChange} />
      {inputValue}

      <div>
        {age}
        <button onClick={increaseAge}>Increase age</button>
      </div>
    </>
  );
}

export default App;