import { useState } from 'react'
import Buttons from './Buttons'
import Display from './Display'

const regx = /^[0-9][.]*[0-9]*$/;



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
const invalidDecimal =/[0-9+-/*][.][0-9][.]*$/g
  const number = i;
  const formula = state.formula+i
  if(invalidDecimal.test(state.currentNumber)){
    console.log("double")
setState({
  currentNumber: formula.replace(/\.$/,""),
  formula: formula.replace(/\.$/,"")
})
   
  } else{
    setState({
      initialNumber: "",
      currentNumber: formula
      .replace("..", "."),
      formula: formula
      .replace("..", ".")
      .replace(/^0/, "")
      
      
    
    })
  }
  
}



const operator = (symbol) =>{
const regex = /^[0-9-\.*/+]+[=]{1}[0-9\.\s]+$/g
  let formula = ""
  if(regex.test(state.formula)){
    let formula = state.currentNumber
    setState({
      formula: formula+symbol
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
      .replace("/*", "*"),
      currentNumber: formula
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
  } else {
  let formula = state.formula+symbol;

  setState({
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
    .replace("/*", "*"),
    currentNumber: formula
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
}

const calculation = () =>{
  const regDouble = /^[0-9-*\./+]+[=]{1}[0-9\.\s]+$/g;
  const regex = /[+/*-]$/
  let result = ""
 if(regex.test(state.formula)){
  result = eval(state.formula.slice(0,-1))
  setState({
    formula: state.formula.slice(0,-1) + "= " + result,
    currentNumber: result.toString()
  })  
 
 } 
 else if(regDouble.test(state.formula)){
console.log("not valid")
 }
 else{
   result = eval(state.formula)
   setState({
    formula: state.formula + "= " + result,
    currentNumber: result.toString()
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
      <div className="display" >
      <div id="display">{state.initialNumber}{state.formula}<div className="memory">{state.currentNumber}</div></div>
        </div>
        <div className="buttons" >
          <Buttons 
          clearValue={clearValue} 
          inputValue={inputValue} 
          calculation={calculation} 
          state={state} 
          operator={operator} />
        </div>
        
    </div>
  );
}

export default App;
