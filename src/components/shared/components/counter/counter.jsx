import {Button} from "../button/button.jsx";

export const Counter = ({
                            onIncrement,
                            onDecrement,
                            value,
                            min,
                            max
}) => {

    function handleIncrement() {
        if (value < max) {
            onIncrement();
        }
    }

    function handleDecrement() {
        if (value > min) {
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
        <div className="group">
            <Button onClick={handleDecrement} disabled={isDisabledDecrement()} type="button">-</Button>
            <div>{value}</div>
            <Button onClick={handleIncrement} disabled={isDisabledIncrement()} type="button">+</Button>
        </div>
    )
}
