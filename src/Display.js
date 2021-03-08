const Display = ({state}) => {
    return ( 
        <div id="display">{state.arr}
        <div className="memory">{state.input}</div>
        </div>
     );
}
 
export default Display;
