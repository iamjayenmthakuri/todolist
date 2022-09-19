import React from 'react';

 function App() {
  return(
    <>
    <User job="intern" salary={100000}  company="Netflix" />
    </>
  );
 }
  const age =20;
  const User = (props) =>{

  return (
    <>
    {age>=18 ? <h1>over age</h1>:<h1>under age</h1>}
    <h1 style={{color:"red"}}>This is color</h1>
    <h1>{props.job}</h1>
    <h1>{props.salary}</h1>
    <h1>{props.company}</h1>
    </>
    
  );
  }

export default App;


