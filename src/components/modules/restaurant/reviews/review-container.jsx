import {useSelector} from "react-redux";
import {selectReviewById} from "../../../../redux/entities/restaurant/review-slice.js";

export const ReviewContainer = ({id}) => {
    const review = useSelector((state) => selectReviewById(state, id));

    if (!review) {
        return null;
    }

    const { text } = review;

    return (
        <div>
            <h4>{text}</h4>
        </div>
    )
}
