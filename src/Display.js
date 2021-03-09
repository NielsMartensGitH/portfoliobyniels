const Display = ({state}) => {
    return ( 
        <div id="display">{state.initialNumber}{state.formula}
        <div className="memory">{state.currentNumber}</div>
        </div>
     );
}
 
export default Display;
