import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../redux/entities/restaurant/restaurant-slice.js";
import {Menu} from "../restaurant/menu/menu.jsx";
import {useParams} from "react-router";

export const MenusPage = () => {
    const { id } = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) return null;

    const { menu } = restaurant;

    return (
        <div>
            {menu?.length ? <Menu menus={menu} /> : 'No menu'}
        </div>
    )
}
