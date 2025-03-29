import {useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addItemCart,
    removeItemCart,
    selectCartByRestaurantId
} from "../../../../redux/entities/restaurant/cart-slice.js";
import {selectActiveRestaurantId} from "../../../../redux/entities/restaurant/restaurant-slice.js";

export const useCount = (dishId) => {
    const restaurantId = useSelector(selectActiveRestaurantId);
    const restaurant = useSelector(state => selectCartByRestaurantId(state, restaurantId));
    const dispatch = useDispatch();

    const count = useMemo(() => {
        if (!!restaurant) {
            return restaurant.dishCount[dishId] || 0;
        }
        return 0;
    }, [restaurant, dishId]);

    const increment = useCallback(() => {
        dispatch(addItemCart({restaurantId, dishId}));
    }, [dispatch, dishId]);

    const decrement = useCallback(() => {
        dispatch(removeItemCart({restaurantId, dishId}));
    }, [dispatch, dishId]);

    return {
        count,
        increment,
        decrement
    }
}
