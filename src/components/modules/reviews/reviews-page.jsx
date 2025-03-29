import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../redux/entities/restaurant/restaurant-slice.js";
import {Reviews} from "../restaurant/reviews/reviews.jsx";

export const ReviewsPage = () => {
    const { id } = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) return null;

    const { reviews } = restaurant;

    return (
        <div>
            {reviews?.length ? <Reviews reviews={reviews} /> : 'No reviews'}
        </div>
    )
}
