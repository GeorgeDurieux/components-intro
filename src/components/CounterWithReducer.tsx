import CounterButton from "./CounterButton.tsx";
import {useCounterWithReducer} from "../hooks/useCounterWithReducer.ts";

const CounterWithReducer = () => {

    const {count, lastAction, time, increase, decrease, reset} = useCounterWithReducer();

    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton title={'Increase'} onClick={increase} />
                    <CounterButton title={'Reset'} onClick={reset} disabled={count === 0} addClass="bg-red-600 disabled:bg-red-400" />
                    <CounterButton title={'Decrease'} onClick={decrease} disabled={count === 0} />
                </div>
            </div>
            <p>Last change: <strong>{lastAction || '-'}</strong> at {time || '-'}</p>
        </>
    )
}

export default CounterWithReducer;