import {restaurants} from "../../../../materials/mock.js";
import {Restaurant} from "./restaurant/Restaurant.jsx";
import {TabItem} from "../../shared/components/tab/tab-item.jsx";
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
                    <TabItem onClick={() => selectRestaurant(id)}
                             active={selectedRestaurantId === id}
                             key={id}>{name}</TabItem>)}
            </div>

            <div className="restaurant-content">
                {selectedRestaurant ? <Restaurant key={selectedRestaurantId}
                                                  restaurant={selectedRestaurant}/> : 'No restaurant'}
            </div>
        </div>
    )
}
