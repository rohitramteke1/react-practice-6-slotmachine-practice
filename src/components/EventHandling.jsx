import React, { useState } from "react";
import "../utilities/button.css";

const EventHandling = () => {
  const [bg, changeBG] = useState("Yellow");
    const [name, setName] = useState('Click Me');
  const ChangeBG = () => {
    console.log("Single click");
    let green = "#aeaec3";
    setName( 'single click..' );
    changeBG(green);
  };

  const BgBack = (event) => {
    event.stopPropagation(); // Add this line
    console.log("double click");
    let red = "#4ae2cd";
    changeBG(red);
    setName( 'double click..' );
  };



  return (
    <>
      <div className="btn-container" style={{ backgroundColor: bg }}>
        <button className="btn" onClick={ ChangeBG } onDoubleClick={ BgBack }>
          { name }
        </button>
      </div>
    </>
  );
};

export default EventHandling;
