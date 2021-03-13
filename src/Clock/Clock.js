import { useState, useEffect } from 'react'
import Controls from './Controls'
import Timer from './Timer'

function Clock(){

const [state, setState] = useState({
    break: 5,
    session: 25
})
const [second, setSecond] = useState("00");
const [minute, setMinute] = useState("00");
const [isActive, setIsActive] = useState(false);
const [counter, setCounter] = useState(0);

useEffect(() =>{
    let intervalId;

    if (isActive){
        intervalId = setInterval(() =>{
            const secondCounter = counter % 60;
            const minuteCounter = Math.floor(counter / 60);

            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

            setSecond(computedSecond);
            setMinute(computedMinute);

            setCounter(counter => counter +1);
        }, 1000)
    }

  

    return () => clearInterval(intervalId);
}, [isActive, counter])

const stopTimer =() =>{
    setIsActive(false);
    setCounter(0);
    setSecond('00');
    setMinute('00')
    console.log("test")
  }

    return(
        
            <div className="clock-main">
               <h1 className="clock-title">25+5 Clock</h1>
              <Controls break={state.break} session={state.session}/>
              <Timer minute={minute} second={second}/>
              <div className="clock-player row">
                    <div onClick={() =>setIsActive(!isActive)} className="col-6" id="start_stop"><i className="clock-icon fas fa-play"></i></div>
                    <div onClick={stopTimer} className="col-6" id="reset"><i className="clock-icon fas fa-sync-alt"></i></div>
                    </div>

                
               

            </div>
        
    )
}

export default Clock;