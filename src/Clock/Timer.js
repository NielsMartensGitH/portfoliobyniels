function Timer(props){
    return (  
        <div className="clock-timer" id="timer-label">
                    <h2>Session</h2>
                    <div className="clock-display" id="time-left">{props.minute}:{props.second}</div>
                    
                </div>
    );
}
 
export default Timer;