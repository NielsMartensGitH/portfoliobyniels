import { useState, useEffect } from 'react'
import Controls from './Controls'
import Timer from './Timer'


function Clock(){

const[text, setText] = useState("Session");

const[minute, setMinute] = useState(25);   /* is niet de teller maar waarde als op pauze staat*/
const[second, setSecond] = useState("00");

const[breakLength, setBreakLength] = useState(5);
const[sessionLength, setSessionLength] = useState(25);

const[breakActive, setBreakActive] = useState(false);
const[sessionActive, setSessionActive] = useState(false);

const[breakCount, setBreakCount] = useState(300);   /* waarde als de teller opspringt */
const[sessionCount, setSessionCount] = useState(1500);

const[zero, setZero] = useState("");

const[breakSwitch, setBreakSwitch] = useState("off")
const[sessionSwitch, setSessionSwitch] = useState("on")


console.log(typeof sessionLength)
/* SESSION LISTENER */
useEffect(() =>{
    
    let intervalId;
    if (sessionActive && sessionCount >=0){
       
        intervalId = setInterval(() =>{
            const secondCounter = sessionCount % 60;
            const minuteCounter = Math.floor(sessionCount / 60);

            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

            setSecond(computedSecond)
            setMinute(computedMinute)
            setSessionCount(sessionCount-1)
            if(sessionCount === 0){
                setBreakActive(!breakActive)
                setSessionActive(!sessionActive)
                setText("Break")
                setBreakCount(breakLength*60)
                setBreakSwitch("on")
                setSessionSwitch("off")
                const audio = new Audio("250629__kwahmah-02__alarm1.mp3");
                audio.play();
                
            }
        }, 1000)
    }

    return () => clearInterval(intervalId);
}, [sessionActive, sessionCount, breakActive])

useEffect(() =>{
   
    let intervalId;
    if (breakActive && breakCount >=0){

        intervalId = setInterval(() =>{
            const secondCounter = breakCount % 60;
            const minuteCounter = Math.floor(breakCount / 60);

            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

            setSecond(computedSecond)
            setMinute(computedMinute)
            setBreakCount(breakCount-1)
            if(breakCount === 0){
                setSessionActive(!sessionActive)
                setBreakActive(!breakActive)
                setText("Session")
                setSessionCount(sessionLength*60)
                setBreakSwitch("off")
                setSessionSwitch("on")
                
            }
        }, 1000)
    }

    return () => clearInterval(intervalId);
}, [breakActive, breakCount, sessionActive])

const incrementSession = ()=>{
    if(sessionLength >=9 && sessionLength <60 && sessionActive === false && sessionSwitch==="on"){
    setZero("")
    setMinute(minute+1)
    setSecond("00")
    setSessionLength(minute+1)
    setSessionCount(sessionCount+60)
    }
    else if(sessionLength >=1 && sessionLength <=11 && sessionActive === false && sessionSwitch==="on"){
    setZero("0")
    setMinute(Number(minute)+1)
    setSecond("00")
    setSessionLength(Number(minute)+1)
    setSessionCount(sessionCount+60)
    }
    else if(sessionLength >0 && sessionLength < 60 && sessionActive === false){
        setSessionLength(sessionLength+1)
        setSessionCount(sessionCount+60)
    }
    
} 

const decrementSession = ()=>{
    if(sessionLength >=11 && sessionLength <= 60 && sessionActive === false && sessionSwitch==="on"){
    setZero("")
    setMinute(minute-1)
    setSecond("00")
    setSessionLength(minute-1)
    setSessionCount(sessionCount-60)
    }
    else if(sessionLength >1 && sessionLength <=10 && sessionActive === false && sessionSwitch==="on"){
        setZero("0")
        setMinute(minute-1)
        setSecond("00")
        setSessionLength(minute-1)
        setSessionCount(sessionCount-60)
    }
    else if(sessionLength >1 && sessionLength <= 60 && sessionActive === false){
        setSessionLength(sessionLength-1)
        setSessionCount(sessionCount-60)
    }
    
}

const incrementBreak = ()=>{
    if(breakLength >=9 && breakLength <60 && breakActive === false && breakSwitch==="on"){
    setZero("")
    setMinute(Number(minute)+1)
    setSecond("00")
    setBreakLength(Number(minute)+1)
    setBreakCount(breakCount+60)
    }
    else if(breakLength >=1 && breakLength <=11 && breakActive === false && breakSwitch==="on"){
    setZero("0")
    setMinute(Number(minute)+1)
    setSecond("00")
    setBreakLength(Number(minute)+1)
    setBreakCount(breakCount+60)
    }
    
    else if(breakLength >=1 && breakLength <60 && breakActive === false){
        setBreakLength(breakLength+1)
        setBreakCount(breakCount+60)
    }
}

const decrementBreak = () =>{
    if(breakLength >=11 && breakLength <=60 && breakActive === false && breakSwitch=="on"){
    setZero("")
    setMinute(minute-1)
    setSecond("00")
    setBreakLength(minute-1)
    setBreakCount(breakCount-60)
    }
    else if((breakLength >1 && breakLength <=10 && breakActive === false && breakSwitch=="on")){
    setZero("0")
    setMinute(minute-1)
    setSecond("00")
    setBreakLength(minute-1)
    setBreakCount(breakCount-60)
    }
    else if(breakLength >1 && breakLength <=60 && breakActive === false){
        setBreakLength(breakLength-1)
        setBreakCount(breakCount-60)
    }
}

const resetTimer = () =>{
    setText("Session")
    setMinute(25)
    setSecond("00")
    setBreakLength(5)
    setSessionLength(25)
    setBreakActive(false)
    setSessionActive(false)
    setBreakCount(300)
    setSessionCount(1500)}
   

const handleClick = () =>{
    if(breakSwitch === "on"){
        setBreakActive(!breakActive)
        setZero("")
    }
    else{
        setSessionActive(!sessionActive)
        setZero("")
    }
}


    return(
        
            <div className="clock-main">
               <h1 className="clock-title">25+5 Clock</h1>
              <Controls 
              breaklength={breakLength} 
              sessionlength={sessionLength}
              incrementsession={incrementSession} 
              decrementsession={decrementSession}
              incrementbreak={incrementBreak}
              decrementbreak={decrementBreak}/>
              <Timer text={text} minute={minute} second={second} zero={zero}/>
              <div className="clock-player row">
                    <div className="col-6" id="start_stop"><button className="clock-play" 
                        onClick={handleClick}>
                        <i className="clock-icon fas fa-play"></i></button></div>
                    <div className="col-6" id="reset"><button className="clock-play" onClick={resetTimer}><i className="clock-icon fas fa-sync-alt"></i></button></div>
                    </div>

                
               

            </div>
        
    )
}

export default Clock;