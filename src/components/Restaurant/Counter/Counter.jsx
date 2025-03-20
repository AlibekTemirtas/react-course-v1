export const Counter = ({
                            onIncrement,
                            onDecrement,
                            value,
                            min,
                            max
}) => {

    function handleIncrement() {
        if (value <= max) {
            onIncrement();
        }
    }

    function handleDecrement() {
        if (value >= min) {
            onDecrement();
        }
    }

    function isDisabledIncrement() {
        return value >= max;
    }

    function isDisabledDecrement() {
        return value <= min;
    }


    return (
        <div className="group" style={{'display': 'flex', 'alignItem': 'center', 'gap': '12px'}}>
            <button onClick={handleDecrement} disabled={isDisabledDecrement()} type="button">-</button>
            <div>{value}</div>
            <button onClick={handleIncrement} disabled={isDisabledIncrement()} type="button">+</button>
        </div>
    )
}
