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
      <h1>
        Player:{" "}
        <span style={{ color: "gray" }}>{playerOne.turn ? "X" : "O"}</span>
      </h1>
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
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </button>
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

  button {
    margin: 50px auto;
    box-shadow: inset 0px 5px 4px 0px #bbdaf7;
    background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
    background-color: #79bbff;
    border-radius: 6px;
    border: 1px solid #84bbf3;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    padding: 11px 51px;
    text-decoration: none;
    text-shadow: 0px -1px 50px #528ecc;

    &:hover {
      background: linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
      background-color: #378de5;
    }

    &:active {
      position: relative;
      top: 1px;
    }
  }
  div {
    text-align: center;
    border: 0.1px solid gray;
    min-width: 33.2%;
    height: 33.32%;
    font-family: "Chango", cursive;
    font-size: 5rem;
  }
`;
