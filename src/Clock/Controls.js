function Controls (props){

    return (
        <div className="clock-controls row justify-content-center bg-light">

                <div className="break col-sm-5" id="break-label">
                    <h2>Break Length</h2>
                    <div className="control-box row">
                    <div className="button-left col-5" id="break-decrement"><button className="clock-play" onClick={props.decrementbreak}><i className="clock-icon fas fa-arrow-circle-down"></i></button></div>
                    <div className="button-center col-2" id="break-length">{props.break}</div>
                    <div className="button-right col-5" id="break-increment"><button className="clock-play" onClick={props.incrementbreak}><i className="clock-icon fas fa-arrow-circle-up"></i></button></div>
                    </div>
                </div>
               
                
                <div className="session col-sm-5" id="session-label">
                <h2>Session Length</h2>
                    <div className="control-box row">
                    <div className="button-left col-5" id="session-decrement"><button onClick={props.decrementsession} className="clock-play"><i className="clock-icon fas fa-arrow-circle-down"></i></button></div>
                    <div className="button-center col-2" id="session-length">{props.session}</div>
                    <div className="button-right col-5" id="session-increment"><button className="clock-play" onClick={props.incrementsession}><i className="clock-icon fas fa-arrow-circle-up"></i></button></div>
                    </div>
                </div>
                </div>
      );
}
 


export default Controls