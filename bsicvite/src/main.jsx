import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!!</h1>
    </div>
  )
}

// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// } this can be used in custom not here because it doesnt know the type

// const anotherElement=(
//   <a href="https://google.com" target="_blank">Visit Google</a>
// ) this cant be used because becuase the variable cant be used directly

const newReactElement=React.createElement(
'a',
  {href:'https://google.com',target: '_blank'},
  'Click Meee'
)
  


createRoot(document.getElementById('root')).render(
  
  newReactElement
    
  
)
