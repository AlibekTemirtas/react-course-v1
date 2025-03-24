import {restaurants} from "../../../../materials/mock.js";
import {Restaurant} from "./restaurant/Restaurant.jsx";
import {TapItem} from "../../shared/components/tap/tap-item.jsx";
import {useCallback, useState} from "react";

export const RestaurantPage = () => {
    const [selectedRestaurantId, setRestaurantId] = useState(restaurants[0].id);

    const selectedRestaurant = restaurants.find(item => item.id === selectedRestaurantId);

    const selectRestaurant = useCallback((id) => {
        if (selectedRestaurantId === id) {
            return;
        }

        setRestaurantId(id);
    }, [selectedRestaurantId]);

    return (
        <div className="restaurants">
            <h1>Рестораны</h1>

            <div className="tabs">
                {restaurants.map(({id, name}) =>
                    <TapItem onClick={() => selectRestaurant(id)}
                             active={selectedRestaurantId === id}
                             key={id}>{name}</TapItem>)}
            </div>

            <div className="restaurant-content">
                {selectedRestaurant ? <Restaurant key={selectedRestaurantId}
                                                  restaurant={selectedRestaurant}/> : 'No restaurant'}
            </div>
        </div>
    )
}
