import React from 'react';


export const Counter = (props :any) => (
  <div>
    <span>{props.Counter.count}</span>
    <br/>
    <button  onClick={() => props.increment()}>Increment</button>
    <button  onClick={() => props.decrement()}>Decrement</button>
  </div>
)