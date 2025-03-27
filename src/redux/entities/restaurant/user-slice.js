import {createSlice} from "@reduxjs/toolkit";
import {normalizedUsers} from "../../../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedUsers.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),

    ids: normalizedUsers.map(item => item.id)
};


export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectUserIds: (state) => state.ids
    }
});

export const { selectUserById, selectUserIds } =
    userSlice.selectors;
