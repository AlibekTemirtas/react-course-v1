import {useSelector} from "react-redux";
import {selectCartByRestaurantId} from "../../../redux/entities/restaurant/cart-slice.js";
import {selectActiveRestaurantId} from "../../../redux/entities/restaurant/restaurant-slice.js";

export const Cart = () => {
    const restaurantId = useSelector(selectActiveRestaurantId);
    const cart = useSelector((state) => selectCartByRestaurantId(state, restaurantId));

    if (!cart) return null;

    const dishCount = Object.keys(cart.dishCount).length;

    return (
        <div>Cart - {dishCount}</div>
    )
}
