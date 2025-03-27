import {useCount} from "../../../shared/components/counter/use-count.js";
import {Counter} from "../../../shared/components/counter/counter.jsx";

const MAX = 5;
const MIN = 0;

export const Dish = ({menu}) => {
    const { id, name, price, ingredients } = menu;

    const {
        count,
        increment,
        decrement
    } = useCount(id);


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
