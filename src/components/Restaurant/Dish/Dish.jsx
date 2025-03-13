import {Counter} from "../Counter/Counter.jsx";

export const Dish = ({menu}) => {
    const { name, price, ingredients } = menu;
    return (
        <div className={'dish-item'}>
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Ingredients: {ingredients.join(', ')}</p>
            <Counter />
        </div>
    )
}
