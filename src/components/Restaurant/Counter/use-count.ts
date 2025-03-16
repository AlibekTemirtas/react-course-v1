import {useState} from "react";

const MAX = 5;
const MIN = 0;

export const useCount = ({min = MIN, max = MAX} ={}) => {
    const [count, setCount] = useState(min);

    const increment = () => {
        setCount(Math.min(count + 1, MAX));
    };

    const decrement = () => {
        setCount(Math.max(count - 1, MIN));
    };

    function isDisabledIncrement() {
        return count >= MAX;
    }

    function isDisabledDecrement() {
        return count <= MIN;
    }

    return {
        count,
        increment,
        decrement,
        isDisabledIncrement,
        isDisabledDecrement
    }
}
