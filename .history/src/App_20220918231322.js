import React,{useState} from 'react';

function App() {
  const [age,setAge] =useState(0);
  const increaseAge =()=>{
    setAge(age+1);
  }
  const [inputValue,setInputValue]=useState()
const handleInputChange =(event)=>{
  console.log(event.traget.value);
}
  return (
  <>
  <input type="text" onChange={handleInputChange} />
  {inputValue}
    {age}
    <button onClick={increaseAge}>Increase age</button>
    </>
  );
}

export default App;