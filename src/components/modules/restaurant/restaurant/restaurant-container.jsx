import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../../redux/entities/restaurant/restaurant-slice.js";
import {Restaurant} from "./restaurant.jsx";

export const RestaurantContainer = ({id}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    return (
        <Restaurant key={id}
                    restaurant={restaurant}/>
    )
}
