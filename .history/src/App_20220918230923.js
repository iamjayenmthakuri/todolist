import React,{useState} from 'react';

function App() {
  const [age,setAge] =useState(0);
    

  const increaseAge =()=>{
    setAge(age+1);

  }
  return (
  <>
  <input type="text" />
    {age}
    <button onClick={increaseAge}>Increase age</button>
    </>
  );
}

export default App;