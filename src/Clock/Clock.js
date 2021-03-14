import { useState, useEffect } from 'react'
import Controls from './Controls'
import Timer from './Timer'

function Clock(){

const [state, setState] = useState({
    break: 5,
    session: 25,
    second: "00",
    minute: "25",
    isActive: false,
    counter: 1500
})


useEffect(() =>{
    let intervalId;

    if (state.isActive && state.counter >=0){
        intervalId = setInterval(() =>{
            const secondCounter = state.counter % 60;
            const minuteCounter = Math.floor(state.counter / 60);

            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

            setState(prevState =>{return{...prevState, second: computedSecond}});
            setState(prevState =>{return{...prevState, minute: computedMinute}});

            setState(prevState =>{return{...prevState, counter: state.counter -1}});
        }, 1000)
    }

  

    return () => clearInterval(intervalId);
}, [state.isActive, state.counter])

const stopTimer =() =>{
    setState(prevState =>{
        return{
            ...prevState,
            isActive: false,
            counter: state.session*60,
            second: "00",
            minute: state.session
        }
})
}

const incrementSession = ()=>{
    setState(prevState =>{
        return{...prevState, session: state.session+1}
        
    })
    
    
   
}

const decrementSession = ()=>{
    setState(prevState =>{
        return{...prevState, session: state.session-1}
    
        
    })
    
}

const incrementBreak = ()=>{
    setState(prevState =>{
        return{...prevState, break: state.break+1}
    })
    
}

const decrementBreak = ()=>{
    setState(prevState =>{
        return{...prevState, break: state.break-1}
    })
}


    return(
        
            <div className="clock-main">
               <h1 className="clock-title">25+5 Clock</h1>
              <Controls 
              decrementbreak={decrementBreak}
              incrementbreak={incrementBreak}
              decrementsession={decrementSession}
              incrementsession={incrementSession} 
              break={state.break} 
              session={state.session}/>
              <Timer minute={state.minute} second={state.second}/>
              <div className="clock-player row">
                    <div className="col-6" id="start_stop"><button className="clock-play" onClick={() => setState(prevState =>{return{...prevState, isActive: !state.isActive}})}><i className="clock-icon fas fa-play"></i></button></div>
                    <div className="col-6" id="reset"><button onClick={stopTimer} className="clock-play"><i className="clock-icon fas fa-sync-alt"></i></button></div>
                    </div>

                
               

            </div>
        
    )
}

export default Clock;