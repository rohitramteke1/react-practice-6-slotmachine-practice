import React, { useState } from "react";
import '../index.css';

const Hooks = () => {
  let [count, setCount] = useState(1);
  
  const IncrementCount = () => {
    console.log(count);
    setCount(count + 1);
  }

  return (
    <>
      <div className="hookes-container">
        <h1 className="hookes-counter"> { count } </h1>
        <button onClick={ IncrementCount } className="hookes-button">Click Me</button>
      </div>
    </>
  );
};

export default Hooks;
