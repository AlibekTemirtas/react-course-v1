import {ReviewForm} from "./ReviewForm/ReviewForm.jsx";

export const Reviews = ({reviews}) => {
    return (
        <div className={'review'}>
            <div className="group">
                <h3 className="group-name">
                    Отзывы
                </h3>
                <ul className="group-list">
                    {reviews.map(({text}) => (<li key={text}>{text}</li>))}
                </ul>
            </div>
            <hr/>
            <ReviewForm />
            <hr/>
        </div>
    )
}
