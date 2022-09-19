import React,{useState} from 'react';

function App() {
  const [showText,setShowText]=useState(true);
  const [age,setAge] =useState(0);
  const increaseAge =()=>{
    setAge(age+1);
  }
const [inputValue,setInputValue]=useState("");

const handleInputChange =(event)=>{
  setInputValue(event.target.value);
}
  return (
  <><button>show/hide</button>
  {showText ===true && <h1>My Name is Jayen</h1>}
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