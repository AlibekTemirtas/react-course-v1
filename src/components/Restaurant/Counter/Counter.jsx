import {useCount} from "./use-count.ts";

export const Counter = (props) => {
    const {
        count,
        increment,
        decrement,
        isDisabledDecrement,
        isDisabledIncrement
    } = useCount();

    return (
        <div className="group" style={{'display': 'flex', 'alignItem': 'center', 'gap': '12px'}}>
            <button onClick={decrement} disabled={isDisabledDecrement()}>-</button>
            <div>{count}</div>
            <button onClick={increment} disabled={isDisabledIncrement()}>+</button>
        </div>
    )
}
