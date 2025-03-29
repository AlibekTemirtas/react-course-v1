import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    selectors: {
        selectAllCartItems: (state) => state.items,
        selectCartByRestaurantId: (state, restaurantId) => state.items.find(item => item.restaurantId === restaurantId)
    },
    reducers: {
        addItemCart: (state, { payload }) => {
            const { restaurantId, dishId } = payload;
            const items = state.items;
            const item = items.find(_item => _item.restaurantId === restaurantId);

            if (!item) {
                items.push({
                    restaurantId,
                    dishCount: {
                        [dishId]: 1
                    }
                });
                return state;
            } else {
                if (!item.dishCount[dishId]) {
                    item.dishCount[dishId] = 1;
                } else {
                    item.dishCount[dishId] += 1;
                }
            }
        },
        removeItemCart: (state, { payload }) => {
            const { restaurantId, dishId } = payload;
            const items = state.items;
            const item = items.find(_item => _item.restaurantId === restaurantId);

            if (!item) return state;

            item.dishCount[dishId] = item.dishCount[dishId] - 1;

            if (item.dishCount[dishId] <= 0) {
                delete item.dishCount[dishId];
            }

            if (!Object.keys(item.dishCount).length) {
                state.items = items.filter(_item => _item.restaurantId !== restaurantId);
            }
        }
    }
});

export const { selectAllCartItems, selectCartByRestaurantId } =
    cartSlice.selectors;
export const { addItemCart, removeItemCart } = cartSlice.actions;
