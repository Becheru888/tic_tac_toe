import React from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Game>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Game>
    </div>
  );
}

export default App;

const Game = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 50px auto;
  width: 400px;
  height: 400px;
  border: 2px solid gray;
  border-radius: 20px;

  div {
    border: 0.1px solid gray;
    min-width: 33.2%;
  }
`;
