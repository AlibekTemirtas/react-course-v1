import {ReviewForm} from "./review-form/review-form.jsx";
import {ReviewContainer} from "./review-container.jsx";
import {Cart} from "../cart/cart.jsx";

export const Reviews = ({reviews}) => {
    return (
        <div className={'review'}>
            <div className="group">
                <h3 className="group-name">
                    Отзывы
                </h3>
                <ul className="group-list">
                    {reviews.map((id) => (
                        <ReviewContainer key={id} id={id} />
                    ))}
                </ul>
            </div>
            <hr/>
            <ReviewForm />
            <Cart />
            <hr/>
        </div>
    )
}
