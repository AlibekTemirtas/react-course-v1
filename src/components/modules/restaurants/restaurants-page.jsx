import {Outlet} from "react-router";
import {RestaurantTabContainer} from "../restaurant/restaurant/restaurant-tab-container.jsx";
import {useSelector} from "react-redux";
import {
    selectRestaurantIds
} from "../../../redux/entities/restaurant/restaurant-slice.js";

export const RestaurantsPage = () => {
    const restaurantsIds = useSelector(selectRestaurantIds);

    return (
        <div className="restaurants">
            <h1>Рестораны</h1>

            <nav className="tabs">
                {restaurantsIds.map((id) =>
                    <RestaurantTabContainer id={id}
                                            key={id}/>)}
            </nav>

            <div className="restaurant-content">
                <Outlet />
            </div>
        </div>
    )
}
