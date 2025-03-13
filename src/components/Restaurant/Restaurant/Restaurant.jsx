import {Menus} from "../Menus/Menus.jsx";
import {Reviews} from "../Reviews/Reviews.jsx";
import {Counter} from "../Counter/Counter.jsx";

export const Restaurant = ({restaurant}) => {
    const {name, menu, reviews} = restaurant;

    return (
        <div className="restaurant-item">
            <h2 className="restaurant-name">{name}</h2>

            {menu?.length ? <Menus menus={menu} /> : 'No menu'}
            {reviews?.length ? <Reviews reviews={reviews} /> : 'No reviews'}
        </div>
    )
}
