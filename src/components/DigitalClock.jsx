import React, { useState } from "react";

const DigitalClock = () => {

  const newTime = new Date().toLocaleTimeString();
  let [cTime, setCurTime] = useState(newTime);

  // Callback func
  const UpdateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCurTime(newTime);
  }

  setInterval(UpdateTime, 1000);

  return (
    <>
      <div className="clock-container">
        <div className="clock-box">
          <h1> <span> { cTime } </span> </h1>
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
