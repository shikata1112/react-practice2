import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");

  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(false);

  const onClickCountUP = () => {
    setNum(num + 1);
  };

  const onClickShowFlag = () => {
    setShowFlag(!showFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFlag || setShowFlag(true);
      } else {
        showFlag && setShowFlag(false);
      }
    }
    // eslint-disable-next-line
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUP}>カウントアップ</button>
      <br />
      <button onClick={onClickShowFlag}>on/off</button>
      <p>{num}</p>
      {showFlag && <p>( ͡° ͜ʖ ͡°)</p>}
    </>
  );
};

export default App;
