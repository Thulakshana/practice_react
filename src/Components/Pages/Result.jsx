import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Bodycontent from "../Header/Bodycontent";

function Result() {
  const [num1, setnum1] = useState(21);
  function handle() {
    setnum1("hello");
  }

  const [num2, setnum2] = useState(0);
  const increment = () => setnum2(num2 + 1);
  const dicrement = () => setnum2(num2 - 1);

  let mynum = 10;
  useEffect(() => {
    if (mynum > 5) {
      alert("pass");
      console.log("g");
    } else {
      alert("fail");
    }
  }, []);

  return (
    <>
      <Header />
      <Bodycontent>
        <h1>result</h1>

        <button onClick={handle}>click me</button>
        <p>{num1}</p>

        <button onClick={increment}>increment</button>
        <button onClick={dicrement}>dicrement</button>
        <p>{num2}</p>
      </Bodycontent>
    </>
  );
}

export default Result;
