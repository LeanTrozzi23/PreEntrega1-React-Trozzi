import React, { useState } from "react";

const Greeting = ({ message, otraProps }) => {
  const [count, setCount] = useState(0);
  const [countHover, setCountHover] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleHover = () => {
    setCountHover((prevCountHover) => prevCountHover + 1);
  };
  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleClick}>Tocar aqui!</button>
      <span>{count}</span>
      <div
        style={{ width: 300, height: 200, backgroundColor: "green" }}
        onMouseEnter={handleHover}
      ></div>
      <span>{countHover}</span>
    </>
  );
};

export default Greeting;
