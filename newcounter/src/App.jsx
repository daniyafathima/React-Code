import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]=useState(15)

  //let counter = 34
  const addvalue=()=>{
    if(counter<20){
      setCounter(counter+1)
    }
    else{
      setCounter(counter)
    }
    
    
  }
  const removevalue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter)
    }
    
  }
  return (
    <>
      <h1>React code</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value:{counter}</button>
      <br />
      <button onClick={removevalue}>Remove value {counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
