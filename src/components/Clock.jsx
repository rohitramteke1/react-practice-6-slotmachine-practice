import React, { useState } from "react";
import "../index.css";

const Clock = () => {

    let newTime = new Date().toLocaleTimeString();
    let [ctime, setCurTime ] = useState(newTime);

    const setTimeOnClick = () => {
        newTime = new Date().toLocaleTimeString();
        setCurTime(newTime);
    }

  return (
    <>
      <div className="hookes-container">
        <h1 className="hookes-counter"> { ctime } </h1>
        <button onClick={ setTimeOnClick } className="hookes-button btn">
          Change Time
        </button>
      </div>
    </>
  );
};

export default Clock;
