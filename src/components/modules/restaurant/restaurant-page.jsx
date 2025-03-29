import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectActiveRestaurantId,
    selectRestaurantIds,
    setActiveRestaurant
} from "../../../redux/entities/restaurant/restaurant-slice.js";
import {RestaurantContainer} from "./restaurant/restaurant-container.jsx";
import {RestaurantTabContainer} from "./restaurant/restaurant-tab-container.jsx";

export const RestaurantPage = () => {
    const restaurantsIds = useSelector(selectRestaurantIds);
    const selectedRestaurantId = useSelector(selectActiveRestaurantId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveRestaurant(restaurantsIds[0]));
    }, []);


    const selectRestaurant = useCallback((id) => {
        dispatch(setActiveRestaurant(id));
    }, [selectedRestaurantId]);


    return (
        <div className="restaurants">
            <h1>Рестораны</h1>

            <div className="tabs">
                {restaurantsIds.map((id) =>
                    <RestaurantTabContainer id={id}
                                            key={id}
                                            onClick={() => selectRestaurant(id)}
                                            isActive={selectedRestaurantId === id}/>)}
            </div>

            <div className="restaurant-content">
                {selectedRestaurantId ? <RestaurantContainer key={selectedRestaurantId}
                                                             id={selectedRestaurantId} /> : 'No restaurant'}
            </div>
        </div>
    )
}
