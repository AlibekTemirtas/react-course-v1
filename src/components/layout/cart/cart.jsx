import {useSelector} from "react-redux";
import {selectAllCartItems} from "../../../redux/entities/restaurant/cart-slice.js";

export const Cart = () => {
    const carts = useSelector(selectAllCartItems);

    if (!carts?.length) return null;

    const dishCount = carts.length;

    return (
        <div>Cart - {dishCount}</div>
    )
}
