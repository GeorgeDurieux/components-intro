import {useState} from "react";

type CounterState = {
    count: number;
    lastAction: string;
    time:  string;
}

const useAdvancedCounter = (initialValue: number = 0) => {

    const [state, setState] = useState<CounterState>({
        count: initialValue,
        lastAction: '',
        time: ''
    })

    const getCurrentTime = () => new Date().toLocaleTimeString()

    const increaseCount = () => {
        setState({
            count: state.count + 1,
            lastAction: 'Increase',
            time: getCurrentTime()
        })
    }

    const decreaseCount = () => {
        if (state.count > 0) {
            setState({
                count: state.count - 1,
                lastAction: 'Decrease',
                time: getCurrentTime()
            })
        }
    }

    const resetCount = () => {
        setState({
            count: initialValue,
            lastAction: 'Reset',
            time: getCurrentTime()
        })
    }

    return {
        count: state.count,
        lastAction: state.lastAction,
        time:  state.time,
        increaseCount,
        decreaseCount,
        resetCount
    };
}

export default useAdvancedCounter;