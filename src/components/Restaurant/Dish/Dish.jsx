import {useCount} from "../Counter/use-count.js";
import {Counter} from "../Counter/Counter.jsx";

const MAX = 5;
const MIN = 0;

export const Dish = ({menu}) => {
    const { name, price, ingredients } = menu;
    const {
        count,
        increment,
        decrement
    } = useCount(MIN);

    return (
        <div className={'dish-item'}>
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Ingredients: {ingredients.join(', ')}</p>
            <Counter onDecrement={decrement}
                     onIncrement={increment}
                     value={count}
                     max={MAX}
                     min={MIN}/>
        </div>
    )
}
