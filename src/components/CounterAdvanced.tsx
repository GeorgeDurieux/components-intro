import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

const CounterAdvanced = () => {

    const [state, setState] = useState<CounterState>({
        count: 0,
        lastAction: '',
        time: ''
    });

    const getCurrentTime = () => new Date().toLocaleTimeString()

    const increaseCount = () => {
        setState({
            count: state.count + 1,
            lastAction: 'Increase',
            time: getCurrentTime()
        })
    }

    const decreaseCount = () => {
        setState({
            count: state.count - 1,
            lastAction: 'Decrease',
            time: getCurrentTime()
        })
    }

    const resetCount = () => {
        setState({
            count: 0,
            lastAction: 'Reset',
            time: getCurrentTime()
        })
    }

    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center">Count is {state.count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton title={'Increase'} onClick={increaseCount} />
                    <CounterButton title={'Reset'} onClick={resetCount} disabled={state.count === 0} addClass="bg-red-600 disabled:bg-red-400" />
                    <CounterButton title={'Decrease'} onClick={decreaseCount} disabled={state.count === 0} />
                </div>
            </div>
            <p>Last change: <strong>{state.lastAction || '-'}</strong> at {state.time || '-'}</p>
        </>
    )
}

export default CounterAdvanced;