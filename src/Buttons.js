const Buttons = ({inputValue, clearValue, calculation}) => {




    return ( 

    <div className="grids" >
    <div className="button ac" id="clear" onClick={clearValue}>AC</div>  
    
    <div className="button" id="subtract" onClick={() => inputValue("-") }>-</div>
    <div className="button" id="multiply" onClick={() => inputValue("*") }>x</div>
  

    <div className="button" id="one" onClick={() => inputValue(1) }>1</div>
    <div className="button" id="two" onClick={() => inputValue(2) }>2</div>
    <div className="button" id="three" onClick={() => inputValue(3) }>3</div>
    <div className="button" id="divide" onClick={() => inputValue("/") }>/</div>
    <div className="button" id="four" onClick={() => inputValue(4) }>4</div>
    <div className="button" id="five" onClick={() => inputValue(5) }>5</div>
    <div className="button" id="six" onClick={() => inputValue(6) }>6</div>
    <div className="button" id="add" onClick={() => inputValue("+") }>+</div>
    
    <div className="button" id="seven" onClick={() => inputValue(7) }>7</div>
    <div className="button" id="eight" onClick={() => inputValue(8) }>8</div>
    <div className="button" id="nine" onClick={() => inputValue(9) }>9</div>
   
    <div className="button nul" id="zero" onClick={() => inputValue(0) }>0</div>
   
    
    <div className="button" id="decimal" onClick={() => inputValue(".") }>.</div>
    <div className="button equal" id="equals" onClick={calculation}>=</div>


    

</div>

     );
}
 
export default Buttons;