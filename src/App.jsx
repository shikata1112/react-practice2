import React, { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);

  const onClickCountUP = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUP}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
