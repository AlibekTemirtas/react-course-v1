import {restaurants} from "../../../materials/mock.js";
import {Restaurant} from "./Restaurant/Restaurant.jsx";
import {useSelectedRestaurant} from "./use-restaurant.js";
import {TabItem} from "../Layout/Tab/TabItem.jsx";

export const RestaurantPage = () => {
    let {selectedRestaurant, update} = useSelectedRestaurant(restaurants[0]);

    function selectRestaurant(id) {
        const _restaurant = restaurants.find(item => item.id === id);

        if (!!_restaurant) {
            update(_restaurant);

            return;
        }

        alert('No restaurant');
    }

    return (
        <div className="restaurants">
            <h1>Рестораны</h1>

            <div className="tabs">
                {restaurants.map(({id, name}) =>
                    <TabItem onClick={() => selectRestaurant(id)}
                             active={selectedRestaurant?.id === id}
                             key={id}>{name}</TabItem>)}
            </div>

            <div className="restaurant-content">
                {selectedRestaurant ? <Restaurant restaurant={selectedRestaurant}/> : 'No restaurant'}
            </div>
        </div>
    )
}
