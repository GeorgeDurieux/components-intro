import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const CounterWithMoreState = () => {

    const [count,  setCount] = useState(0)
    const [lastAction,setLastAction] = useState('')
    const [time,setTime] = useState('')

    const getCurrentTime = () => new Date().toLocaleTimeString()

    const increaseCount = () => {
        setCount(() => count + 1);
        setLastAction('Increase')
        setTime(getCurrentTime());
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(() => count - 1);
            setLastAction('Decrease')
            setTime(getCurrentTime());
        }
    }

    const resetCount = () => {
        setCount(0);
        setLastAction('Reset')
        setTime(getCurrentTime());
    }

    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton title={'Increase'} onClick={increaseCount} />
                    <CounterButton title={'Reset'} onClick={resetCount} disabled={count === 0} addClass="bg-red-600 disabled:bg-red-400" />
                    <CounterButton title={'Decrease'} onClick={decreaseCount} disabled={count === 0} />
                </div>
            </div>
            <p>Last change: <strong>{lastAction || '-'}</strong> at {time || '-'}</p>
        </>
    )
}

export default CounterWithMoreState