import React from 'react';

 function App() {
  return(
    <>
    <User job="intern" salary={100000}  company="Netflix" />
    </>
  );
 }
  
  const User = (props) =>{

  return (
    <>
    <h1>{props,job}</h1>
    <h1>{props.salary}</h1>
    <h1>{props.comapny}</h1>
    </>
    
  );
  }

export default App;


