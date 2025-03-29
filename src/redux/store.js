import {configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entities/restaurant/restaurant-slice.js";
import {dishSlice} from "./entities/restaurant/dish-slice.js";
import {reviewSlice} from "./entities/restaurant/review-slice.js";
import {userSlice} from "./entities/restaurant/user-slice.js";
import {cartSlice} from "./entities/restaurant/cart-slice.js";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [cartSlice.name]: cartSlice.reducer
    }
})
