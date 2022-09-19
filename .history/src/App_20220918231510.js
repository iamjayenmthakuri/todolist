import React,{useState} from 'react';

function App() {
  const [age,setAge] =useState(0);
  const increaseAge =()=>{
    setAge(age+1);
  }
const [inputValue,setInputValue]=useState("");
const handleInputChange =(event)=>{
  setInputValue(event.traget.value);
}
  return (
  <>
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