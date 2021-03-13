function Timer(props){
    return (  
        <div className="clock-timer" id="timer-label">
                    <h2>Session</h2>
                    <div className="clock-display" id="time-left">{props.minute}:{props.second}</div>
                    <div className="clock-player row">
                    <div className="col-6" id="start_stop"><i className="clock-icon fas fa-play"></i></div>
                    <div className="col-6" id="reset"><i className="clock-icon fas fa-sync-alt"></i></div>
                    </div>
                </div>
    );
}
 
export default Timer;