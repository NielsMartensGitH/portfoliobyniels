const Display = ({state}) => {
    return ( 
        <div id="display">{state.arr}
        <div className="memory">{state.arr}</div>
        </div>
     );
}
 
export default Display;
