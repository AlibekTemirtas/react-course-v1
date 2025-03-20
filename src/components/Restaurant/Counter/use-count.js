import {useState} from "react";

export const useCount = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return {
        count,
        increment,
        decrement
    }
}
