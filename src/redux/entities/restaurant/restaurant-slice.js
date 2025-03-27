import {createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from "../../../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
    activeRestaurantId: null,
    ids: normalizedRestaurants.map(item => item.id)
}


export const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIds: (state) => state.ids,
        selectActiveRestaurantId: (state) => state.activeRestaurantId
    },
    reducers: {
        setActiveRestaurant: (state, {payload}) => {
            state.activeRestaurantId = payload;
        }
    }
});

export const { selectRestaurantById, selectRestaurantIds, selectActiveRestaurantId } =
    restaurantSlice.selectors;

export const { setActiveRestaurant } = restaurantSlice.actions;
