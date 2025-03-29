import {RestaurantContainer} from "./restaurant/restaurant-container.jsx";
import {useParams} from "react-router";
import {setActiveRestaurant} from "../../../redux/entities/restaurant/restaurant-slice.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const RestaurantPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveRestaurant(id));
    }, [id]);

    return (
        <div className="restaurants">
            <RestaurantContainer key={id} id={id} />
        </div>
    )
}
