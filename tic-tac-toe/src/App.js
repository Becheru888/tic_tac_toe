import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [playerOne, setPlayerOne] = useState({
    turn: false,
    icon: "X"
  });

  const [playerTwo, setPlayerTwo] = useState({
    turn: false,
    icon: "O"
  });

  const winPosib = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const handleClick = (id, e) => {
    if (!playerOne.turn) {
      setPlayerOne({
        ...playerOne,
        turn: true
      });
      setPlayerTwo({ ...playerTwo, turn: false });
    } else {
      setPlayerOne({
        ...playerOne,
        turn: false
      });
      setPlayerTwo({
        ...playerTwo,
        turn: true
      });
    }
    playerOne.turn
      ? (e.target.innerHTML = playerOne.icon)
      : (e.target.innerHTML = playerTwo.icon);
  };

  return (
    <div className="App">
      <Game>
        <div
          id="1"
          onClick={e => {
            e.target.innerHTML
              ? alert("Choose an empty field")
              : handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="2"
          onClick={e => {
            e.target.innerHTML
              ? alert("Choose an empty field")
              : handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="3"
          onClick={e => {
            e.target.innerHTML
              ? alert("Choose an empty field")
              : handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="4"
          onClick={e => {
            e.target.innerHTML
              ? alert("Choose an empty field")
              : handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="5"
          onClick={e => {
            e.target.innerHTML
              ? alert("Choose an empty field")
              : handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="6"
          onClick={e => {
            e.target.innerHTML
              ? alert("Choose an empty field")
              : handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="7"
          onClick={e => {
            e.target.innerHTML
              ? alert("Choose an empty field")
              : handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="8"
          onClick={e => {
            e.target.innerHTML
              ? alert("Choose an empty field")
              : handleClick(e.target.id, e);
          }}
        ></div>
        <div
          id="9"
          onClick={e => {
            e.target.innerHTML
              ? alert("Choose an empty field")
              : handleClick(e.target.id, e);
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
    height: 33.32%;
    font-family: "Chango", cursive;
    font-size: 5rem;
  }
`;
