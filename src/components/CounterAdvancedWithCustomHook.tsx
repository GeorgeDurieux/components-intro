import CounterButton from "./CounterButton.tsx";
import useAdvancedCounter from "../hooks/useAdvancedCounter.ts";

const CounterWithCustomHook = () => {

    const {count, lastAction, time, increaseCount, decreaseCount, resetCount} = useAdvancedCounter()

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

export default CounterWithCustomHook;