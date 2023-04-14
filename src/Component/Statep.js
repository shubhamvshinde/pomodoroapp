import React, { createContext } from 'react'
import { useEffect, useState } from 'react';

export const StateContext = createContext();

const Statep = ({children}) => {
    
    const [workTime, setWorkTime] = useState(25 * 60);
    const [shortBreak, setShortBreak] = useState(5 * 60);
    const [longBreakTime, setlongBreakTime] = useState(30 * 60);
    const [inittime, setInittime] = useState(0);
    
    const [activeTag, setActiveTag] = useState(0);
    const [ isTime, isSetTime ] = useState(100);
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(()=> {
        switch(activeTag) {
            case 0: 
                setTime(workTime);
                setInittime(workTime);
                break;
            case 1: 
                setTime(shortBreak);
                setInittime(shortBreak);
                break
            case 2: 
                setTime(longBreakTime);
                setInittime(longBreakTime);
                break
            default:
                break;
        }
    },[activeTag,workTime, shortBreak, longBreakTime])

  return (
    <StateContext.Provider 
    value={{
            activeTag, setActiveTag, 
            isTime, isSetTime,
            time, setTime,
            isActive, setIsActive,
            workTime, setWorkTime,
            shortBreak, setShortBreak,
            longBreakTime, setlongBreakTime,
            inittime, setInittime,
        }}>
        {children}
    </StateContext.Provider>
  )
}

export default Statep;