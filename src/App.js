import { ClickButton } from './modules/button';
import { useState } from 'react'
import './App.css'


export default function App() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  function ChangeValue(i) {
    if (value[i] || calculateWinner(value)) {
      return;
    }
    const newboard = value.slice();
    if (xIsNext) {
      newboard[i] = "X";
    } else
      newboard[i] = "O";
    setValue(newboard);
    setXisNext(!xIsNext);
  }
  function calculateWinner(value) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(value);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div>{status}</div>
      <div className='row'>
        <ClickButton value={value[0]} OnBoard={() => ChangeValue(0)} />
        <ClickButton value={value[1]} OnBoard={() => ChangeValue(1)} />
        <ClickButton value={value[2]} OnBoard={() => ChangeValue(2)} />
      </div>
      <div className='row'>
        <ClickButton value={value[3]} OnBoard={() => ChangeValue(3)} />
        <ClickButton value={value[4]} OnBoard={() => ChangeValue(4)} />
        <ClickButton value={value[5]} OnBoard={() => ChangeValue(5)} />
      </div>
      <div className='row'>
        <ClickButton value={value[6]} OnBoard={() => ChangeValue(6)} />
        <ClickButton value={value[7]} OnBoard={() => ChangeValue(7)} />
        <ClickButton value={value[8]} OnBoard={() => ChangeValue(8)} />
      </div>
    </>
  )
}