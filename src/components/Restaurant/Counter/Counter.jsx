import {useCount} from "./use-count.ts";

const MAX = 5;
const MIN = 0;

export const Counter = (props) => {
    const {count, increment, decrement} = useCount();

    function isDisabledIncrement() {
        return count >= MAX;
    }

    function isDisabledDecrement() {
        return count <= MIN;
    }

    return (
        <div className="group" style={{'display': 'flex', 'alignItem': 'center', 'gap': '12px'}}>
            <button onClick={decrement} disabled={isDisabledDecrement()}>-</button>
            <div>{count}</div>
            <button onClick={increment} disabled={isDisabledIncrement()}>+</button>
        </div>
    )
}
