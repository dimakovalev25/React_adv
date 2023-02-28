import classes from "./Counter.module.css";
import {useSelector, useDispatch} from "react-redux";

import React, {useState, useEffect} from "react";
import {counterActions} from "../store";
import {secondsActions} from '../store';

const Counter = () => {
    const [second, setSecond] = useState(0);
    const [isShowSec, setIsShowSec] = useState(false);
    // console.log(second)

    const counter = useSelector((state) => state.counter.counter);
    const isShow = useSelector((state) => state.counter.isShow);
    const state = useSelector(state => state.counter);
    const sec = useSelector(state => state.seconds.second)
    // console.log(sec)


    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch({type: 'SEC', payload: second})
        dispatch(secondsActions.updateSeconds(second))
    }, [second])


    useEffect(() => {
        if (!isShowSec) {
            return
        }

        const interval = setInterval(() => {
            setSecond(prev => prev + 1)
        }, 1000)


        return () => {
            clearInterval(interval)
        }

    }, [isShowSec])

    const toggleCounterHandler = () => {
        // dispatch({type: 'showCounter'})
        dispatch(counterActions.showCounter())


    };

    const incCounter = () => {
        // dispatch({type: 'increment', payload: 1})
        dispatch(counterActions.increment())
    }

    const incCounter10 = () => {
        // dispatch({type: 'increase', payload: 10})
        dispatch(counterActions.increase(10))
    }

    const decCounter = () => {
        // dispatch({type: 'decrement'})
        dispatch(counterActions.decrement())
    }

    const resetSec = () => {
        // dispatch(secondsActions.reset())
        setSecond(0)
    }

    return (
        <main className={classes.counter}>
            {isShow ? <><h1>Счётчик</h1>
                <div className={classes.value}>{counter}</div>
            </> : null}
            {/*<div className={classes.value}>{counter}</div>*/}

            <button onClick={toggleCounterHandler}>Спрятать / Показать Счетчик</button>
            <div>
                <button className={classes.btn} onClick={incCounter}>Inc</button>
                <button className={classes.btn} onClick={incCounter10}>+10</button>
                <button className={classes.btn} onClick={decCounter}>Dec</button>
            </div>

            <h3>Секундомер</h3>
            <p className={classes.value}>{second}</p>
            <button className={classes.btn} onClick={() => setIsShowSec(true)}>Start</button>
            <button className={classes.btn} onClick={() => setIsShowSec(false)}>Pause</button>
            <button className={classes.btn} onClick={resetSec}>Reset</button>


        </main>
    );
};

export default Counter;
