

import { useState } from 'react'
import './App.css'

function App() {
 let[color, setColor]=useState()
 
  return (

    
    
    <center>
    <div className='bgColor' style={{background:color}} >
      <button onClick={()=>setColor('red')} className='red' >red</button>


      <button onClick={()=>setColor('yellow')} className='yellow'>yellow</button>
      <button onClick={()=>setColor('green')} className='green'>green</button>
      <button onClick={()=>setColor('black')} className='black'>black</button>
      <button onClick={()=>setColor('blue')} className='blue'>blue</button>
      <button onClick={()=>setColor('pink')} className='pink'>pink</button>
      
      </div>
      </center>
   
    
    
  )
    

}

export default App
