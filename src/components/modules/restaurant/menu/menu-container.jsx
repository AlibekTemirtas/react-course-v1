import {useSelector} from "react-redux";
import {selectDishById} from "../../../../redux/entities/restaurant/dish-slice.js";
import {Link} from "react-router";

export const MenuContainer = ({id}) => {
    const menu = useSelector((state) => selectDishById(state, id));

    if (!menu) {
        return null;
    }

    return (
        <Link to={'/dish/' + menu.id}>{menu.name}</Link>
    )
}
