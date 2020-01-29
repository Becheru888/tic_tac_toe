import React, { useState } from "react";
import styled from "styled-components";
import O from "./players_O_X/O.png";
import X from "./players_O_X/X.png";
import "./App.css";

function App() {
  const [playerOne, setPlayerOne] = useState({
    turn: false,
    icon: "X"
  });

  const [playerTwo, setPlayerTwo] = useState({
    turn: true,
    icon: "O"
  });

  const handleClick = (id, e) => {
    if (!playerOne.turn) {
      setPlayerOne({ ...playerOne, turn: true });
      setPlayerTwo({ ...playerTwo, turn: false });
    } else {
      setPlayerOne({ ...playerOne, turn: false });
      setPlayerTwo({ ...playerTwo, turn: true });
    }
    console.log(playerOne.turn, playerTwo.turn);
    return (e.target.innerHTML = playerOne.turn
      ? playerOne.icon
      : playerTwo.icon);
  };

  return (
    <div className="App">
      <Game>
        <div
          id="1"
          onClick={e => {
            handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="2"
          onClick={e => {
            handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="3"
          onClick={e => {
            handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="4"
          onClick={e => {
            handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="5"
          onClick={e => {
            handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="6"
          onClick={e => {
            handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="7"
          onClick={e => {
            handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="8"
          onClick={e => {
            handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="9"
          onClick={e => {
            handleClick(e.target.id, e);
          }}
        ></div>
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
    text-align: center;
    border: 0.1px solid red;
    min-width: 33.2%;
    max-height: 33.33%;
  }
`;
