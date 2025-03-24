import {Menu} from "../menu/menu.jsx";
import {Reviews} from "../reviews/Reviews.jsx";

export const Restaurant = ({restaurant}) => {
    const {name, menu, reviews} = restaurant;

    return (
        <div className="restaurant-item">
            <h2 className="restaurant-name">{name}</h2>

            {menu?.length ? <Menu menus={menu} /> : 'No menu'}
            {reviews?.length ? <Reviews reviews={reviews} /> : 'No reviews'}
        </div>
    )
}
