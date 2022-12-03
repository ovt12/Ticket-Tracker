import React from "react";
import { useState } from "react";
import "./Counter.scss"

// function thats used for tickets add / decreasing

const Counter = () => {

let [counter, setCounter] = useState(0)

//add and take functions for the counter
const add = () => {
  if (counter >= 0 )
    setCounter(counter + 1);
}

const take = () => {
  if (counter > 0)
  setCounter(counter -1);
}

return (
    <div className="counter__container">
        <h4 className="counter__header">Counter:</h4>
        <h3 className="counter__display">{counter}</h3>
        <button onClick={add} className="counter__add counter__buttons">+</button>
        <button onClick={take} className="counter__minus counter__buttons">-</button>
    </div>
  )
};

export default Counter