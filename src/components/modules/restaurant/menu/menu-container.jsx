import {useSelector} from "react-redux";
import {selectDishById} from "../../../../redux/entities/restaurant/dish-slice.js";
import {Dish} from "../dish/dish.jsx";

export const MenuContainer = ({id}) => {
    const menu = useSelector((state) => selectDishById(state, id));

    if (!menu) {
        return null;
    }

    return (
        <Dish key={menu.id} menu={menu}/>
    )
}
