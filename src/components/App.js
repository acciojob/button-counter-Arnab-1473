
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [btnClicked, setBtnClicked] = useState(0);

  const clickedButton = () => {
    setBtnClicked(btnClicked+1);
  }
  return (
    <div>
      <p>Button clicked {btnClicked} times</p>
      <button onClick={clickedButton}>Click me</button>
    </div>
  )
}

export default App
