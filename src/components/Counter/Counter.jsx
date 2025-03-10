import {useCount} from "./use-count.js";

export const Counter = (props) => {
    const {count, increment, decrement} = useCount();

    return (
        <div className="group">
            <button onClick={increment}>+</button>
            <div>{count}</div>
            <button onClick={decrement} disabled={!count}>-</button>
        </div>
    )
}
