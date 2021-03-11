import { useState } from 'react'
import Buttons from './Buttons'


// const multipleOperatorsMinus = /[*/+]+([\-]{1})/g;
// const multipleOperatorsPlus = /[*/-]+([\+]{1})/g;
// const text = "*-+"
// console.log(multipleOperatorsMinus.test(text))
// console.log(text.replace(/^[*/+]([\-]{1})$/g, "$1"))
// console.log(multipleOperatorsPlus.test(text))
// console.log(text.replace(/[*/-]+([\+]{1})/g, "$1"))  


// replace(/([0-9.]*)[-]{2}([0-9])/g, "$1-(-$2)")

const hello = "5*-+6"
console.log(hello.replace(/([0-9.]*)[*]*[-+]{2}([0-9])/g, "$1-(+$2)"))


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
const numberAfterResult = /^[0-9-.*/+]+[=]{1}[0-9.\s]+$/g
const invalidDecimal =/[0-9+-/*][.][0-9][.]*$/g
  const formula = state.formula+i
  if(invalidDecimal.test(state.currentNumber)){
    console.log("double comma")
setState({
  currentNumber: formula.replace(/\.$/,""),
  formula: formula.replace(/\.$/,"")
})
  }

else if(numberAfterResult.test(state.formula)){
  clearValue()



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
const regex = /^[0-9-.*/+]+[=]{1}[0-9.\s]+$/g
  
  if(regex.test(state.formula)){
    let formula = state.currentNumber
    setState({
      formula: formula+symbol
      .replace("**", "*")
      .replace("++", "+")
      .replace("---", "--")
      .replace("//", "/")
      .replace("*+", "+")
      .replace("*/", "/")
      .replace("+/", "/")
      .replace("+*", "*")
      .replace("-*", "*")
      .replace("-/", "/")
      .replace("/+", "+")
      .replace("---", "--")
      .replace("/*", "*")
      .replace("-+-", "--")
      .replace("+-+","+"),
      currentNumber: formula
      .replace("**", "*")
      .replace("++", "+")
      .replace("---", "--")
      .replace("//", "/")
      .replace("*+", "+")
      .replace("*/", "/")
      .replace("+/", "/")
      .replace("+*", "*")
      .replace("-*", "*")
      .replace("-/", "/")
      .replace("/+", "+")
      .replace("/*", "*")
      .replace("-+-", "--")
      .replace("+-+","+")
     
  
    })
  } else {
  let formula = state.formula+symbol;

  setState({
    formula: formula
    .replace("**", "*")
    .replace("++", "+")
    .replace("---", "--")
    .replace("//", "/")
    .replace("*+", "+")
    .replace("*/", "/")
    .replace("+/", "/")
    .replace("+*", "*")
    .replace("-*", "*")
    .replace("-/", "/")
    .replace("/+", "+")
    .replace("/*", "*")
    .replace("-+-", "--")
      .replace("+-+","+"),
    currentNumber: formula
    .replace("**", "*")
    .replace("++", "+")
    .replace("---", "--")
    .replace("//", "/")
    .replace("*+", "+")
    .replace("*/", "/")
    .replace("+/", "/")
    .replace("+*", "*")
    .replace("-*", "*")
    .replace("-/", "/")
    .replace("/+", "+")
    .replace("/*", "*")
    .replace("-+-", "--")
      .replace("+-+","+")
   

  })
}
}

const calculation = () =>{
  const startOperator = /^[^/^*]/;
  const regDoubleIsEqual = /^[0-9-*./+]+[=]{1}[\-0-9.\s]+$/g;
  const endsWithOperator = /[+/*-]$/
  let result = ""
 if(endsWithOperator.test(state.formula)){
 result = eval(state.formula.slice(0,-1).replace(/([0-9.]*)[-]{2}([0-9])/g, "$1-(-$2)").replace(/([0-9.]*)[*]*[+]{2}([0-9])/g, "$1-(+$2)").replace(/[*/-]+([\+]{1})/g, "$1"))
  setState({
    formula: state.formula.slice(0,-1) + "= " + result,
    currentNumber: result.toString()
  })  
 
 } 
 else if(regDoubleIsEqual.test(state.formula)){
console.log("not valid")
 }
 else if(!startOperator.test(state.formula)){
   console.log("also not valid")
 }
 else{
 result = eval(state.formula.replace(/([0-9.]*)[-]{2}([0-9])/g, "$1-(-$2)").replace(/([0-9.]*)[*/]*[+]{2}([0-9])/g, "$1-(+$2)").replace(/[*/-]+([\+]{1})/g, "$1"))
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
      <div id="display">{state.initialNumber}{state.currentNumber}</div>
        </div>
        <div className="memory">{state.formula}</div>
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
