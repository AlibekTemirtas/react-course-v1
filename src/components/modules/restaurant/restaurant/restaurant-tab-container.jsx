import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../../redux/entities/restaurant/restaurant-slice.js";
import {TabItem} from "../../../shared/components/tab/tab-item.jsx";

export const RestaurantTabContainer = ({id, onClick, isActive}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const { name } = restaurant;

    return (
        <TabItem onClick={onClick}
                 active={isActive}
                 key={id}>{name}</TabItem>
    )
}
