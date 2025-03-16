import {Counter} from "../../Counter/Counter.jsx";
import {RATING_MAX, RATING_MIN} from "./constants.js";
import {ReviewStateFacade} from "./review-state-facade.js";

export const ReviewForm = (props) => {
    const {name, text, rating, setName, setText, resetValue, setRating} = ReviewStateFacade();

    function incrementRating() {
        setRating(Math.min(rating + 1, RATING_MAX));
    }

    function decrementRating() {
        setRating(Math.max(rating - 1, RATING_MIN));
    }

    function sendForm() {
        const payload = {
            name,
            text,
            rating
        }

        console.log('sendForm: ', payload);
    }

    return (
        <div className={'review-panel'}>
            <h4>Review form</h4>
            <form className={'review-form'}>
                <label>
                    <span>Name: </span>
                    <input type="text"
                           name="review-name"
                           value={name}
                           onChange={(e) => setName(e.target.value)} />
                </label>
                <br/>
                <label>
                    <span>Text: </span>
                    <br/>
                    <textarea name="review-text"
                              cols="30" rows="10"
                              value={text}
                              onChange={(e) => setText(e.target.value)}/>
                </label>

                <br/>
                <Counter onDecrement={decrementRating}
                         onIncrement={incrementRating}
                         value={rating}
                         max={RATING_MAX}
                         min={RATING_MIN}/>
                <br/>

                <button type="button" onClick={() => sendForm()}>Send</button>
                <button type="button" onClick={() => resetValue()}>Reset</button>
            </form>
        </div>
    )
}
