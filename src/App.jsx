import { useState } from "react";
import "./App.css";
function Calc() {
  let [number1 , setNumber1] = useState(0);
  let [number2 , setNumber2] = useState(0);
  let [result , setResult] = useState(0);

  let add = ()=>{
    setResult(number1 + number2);
  }

  let sub = ()=>{
    setResult(number1 - number2);
  }

  let multiply = ()=>{
    setResult(number1 * number2);
  }

  let division = ()=>{
    setResult(number1 / number2);
  }


  return (
    <div className="main-container">

      <h1 id="heading">Calculator</h1>

      <div className="label-container">
          <label>Enter first number : 
            <input 
              id="n1"
              type="number"
              name="number1"
              value={number1}
              onChange={(e)=> setNumber1(parseInt(e.target.value))}
            />
          </label>

          <label>Enter Second number : 
              <input
                id="n2" 
                type="number"
                name="number2"
                value={number2}
                onChange={(e)=> setNumber2(parseInt(e.target.value))}
              />
          </label>

      </div>

      <div className="result-container">Result :{result}</div>
      
      <div className="button-container">
          <button id="add" onClick={add}>Add</button>
          <button id="sub" onClick={sub}>Sub</button>
          <button id="mul" onClick={multiply}>Multiply</button>
          <button id="divi" onClick={division}>Divide</button>
      </div>

      
    </div>
  )
}

export default Calc;
