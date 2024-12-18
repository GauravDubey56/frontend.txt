/* eslint-disable react-hooks/exhaustive-deps */
// "Create a timer in react starting from 5. When clicked on Start the timer goes down by 1 every second 
// till it reaches 0. The reset button resets everything

import React, {useEffect, useState} from "react";

const Counter = () => {
    const INIT_VALUE = 5;
    const [value, setValue] = useState(INIT_VALUE);
    // const [isTimerActive, setTimerActive] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const stopTimer = () => {
        console.log(`Stop timer`);
        clearInterval(intervalId);
        setIntervalId(null);
        setValue(INIT_VALUE);
        // setTimerActive(false);
    }
    const decrementCounter = () => {
        console.log(`Decrement counter`);
        debugger
        setValue((prev) => prev - 1);
    }
    const initTimer = () => {
        console.log(`Init timer`);
        const initId = setInterval(decrementCounter, 1000);
        setIntervalId(initId);
    };
    useEffect(() => {
        console.log({value});
        if (value < 0) {
            stopTimer();
        }
    }, [value])
    return (
        <div>
            <button onClick={initTimer}>Start</button>
            <br />
            <button onClick={stopTimer}>Reset</button>
            <br />
            <h4>{value > 0 ? `Counter: ${value}` : "resetting counter"}</h4>
        </div>
    )
}

export default Counter;