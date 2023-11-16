import React, { useState } from "react";
import "../index.css";

const timeInString = () => {
    let currDate = new Date();
    let hrs = currDate.getHours();
    let min = currDate.getMinutes();
    let sec = currDate.getSeconds();
    
    let currTime = `${hrs} : ${min} : ${sec} `;
    return currTime;
}

const Clock = () => {
  let currDate = new Date();
  let hrs = currDate.getHours();
  let currTime = timeInString();

  if (hrs >= 12) currTime = currTime + "PM";
  else currTime = currTime + "AM";

  let [time, setTime] = useState(currTime);

  const ChangeTimeOnClick = () => {
    currDate = new Date();
    hrs = currDate.getHours();
    currTime = timeInString();;

    if (hrs >= 12) setTime(currTime + 'PM');
    else setTime(currTime + 'AM');
  };

  return (
    <>
      <div className="hookes-container">
        <h1 className="hookes-counter"> {time} </h1>
        <button onClick={ChangeTimeOnClick} className="hookes-button">
          Change Time
        </button>
      </div>
    </>
  );
};

export default Clock;
