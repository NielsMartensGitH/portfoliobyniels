function Controls (props){

    return (
        <div className="clock-controls row justify-content-center bg-light">

                <div className="break col-sm-5" id="break-label">
                    <h2>Break Length</h2>
                    <div className="control-box row">
                    <div className="button-left col-5" id="break-decrement"><i className="clock-icon fas fa-arrow-circle-down"></i></div>
                    <div className="button-center col-2" id="break-length">{props.break}</div>
                    <div className="button-right col-5" id="break-increment"><i className="clock-icon fas fa-arrow-circle-up"></i></div>
                    </div>
                </div>
               
                
                <div className="session col-sm-5" id="session-label">
                <h2>Session Length</h2>
                    <div className="control-box row">
                    <div className="button-left col-5" id="session-decrement"><i className="clock-icon fas fa-arrow-circle-down"></i></div>
                    <div className="button-center col-2" id="session-length">{props.session}</div>
                    <div className="button-right col-5" id="session-increment"><i className="clock-icon fas fa-arrow-circle-up"></i></div>
                    </div>
                </div>
                </div>
      );
}
 


export default Controls