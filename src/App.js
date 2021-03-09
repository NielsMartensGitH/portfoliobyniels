import { useState } from 'react'
import Buttons from './Buttons'
import Display from './Display'


function App() {

  const [state, setState] = useState({
    initialNumber: 0,
    previousNumber: "",
    currentNumber: "",
    operator: "",
    formula: "",
    fullNumber: "",
    result: ""
  }) 


const inputValue = (i) =>{
 
  const number = i;
  const formula = state.formula+i
  setState({
    initialNumber: "",
    currentNumber: number,
    formula: formula
    .replace("..", ".")
    .replace(/^0/, "")
  
  })
}



const operator = (symbol) =>{
  const formula = state.formula+symbol;
  setState({
    currentNumber: symbol,
    formula: formula
    .replace("**", "*")
    .replace("++", "+")
    .replace("--", "-")
    .replace("//", "/")
    .replace("*+", "+")
    .replace("*/", "/")
    .replace("+/", "/")
    .replace("+*", "*")
    .replace("-+", "+")
    .replace("-*", "*")
    .replace("-/", "/")
    .replace("/+", "+")
    .replace("/*", "*")

  })
}

const calculation = () =>{
  const regex = /[+/*-]$/
  let result = ""
 if(regex.test(state.formula)){
  result = eval(state.formula.slice(0,-1))
  setState({
    currentNumber: state.formula.slice(0,-1) + "= " + result,
    formula: result.toString()
  })  

 } else{
   result = eval(state.formula)
   setState({
    currentNumber: state.formula + "= " + result,
    formula: result.toString()
  })  
  }

  
}



 const clearValue = () =>{
   setState({
     initialNumber: 0,
     previousNumber: "",
     currentNumber: "",
     operator: "",
     formula: ""
   })
 }


  return (
    <div className="App">
      <div className="display">
          <Display state={state} />
        </div>
        <div className="buttons">
          <Buttons clearValue={clearValue} inputValue={inputValue} calculation={calculation} state={state} operator={operator} />
        </div>
        
    </div>
  );
}

export default App;
