import {createSlice} from "@reduxjs/toolkit";
import {normalizedDishes} from "../../../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),

    ids: normalizedDishes.map(item => item.id)
};


export const dishSlice = createSlice({
    name: 'dishSlice',
    initialState,
    selectors: {
        selectDishById: (state, id) => state.entities[id],
        selectDishesIds: (state) => state.ids
    }
});

export const { selectDishById, selectDishesIds } =
    dishSlice.selectors;
