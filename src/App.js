import React, { useState } from 'react';
import app from './app.css'
function App() {
  const [count, setCount]=useState(0);
  return (
    <div>
      <h1 id="heading">Counter App</h1>
      <h2 id="count">{count}</h2>
      <div className="btns">
        <button id="btn" onClick={()=>setCount(count+1)}>+</button>
        <button id="reset-btn" onClick={()=>setCount(0)} >Reset</button>
        <button id="btn" onClick={()=>setCount(count-1)}>-</button>
      </div>
    </div>
  );
}

export default App;
