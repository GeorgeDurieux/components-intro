import {useState} from "react";

const useCounter = (initialValue: number = 0) => {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const resetCount = () => {
        setCount(initialValue);
    }

    return {
        count,
        increaseCount,
        decreaseCount,
        resetCount
    };
}

export default useCounter;