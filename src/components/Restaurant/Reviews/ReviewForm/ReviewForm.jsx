import {Counter} from "../../Counter/Counter.jsx";
import {RATING_MAX, RATING_MIN} from "./constants.js";
import {userStateFacade} from "./review-state-facade.js";

export const ReviewForm = (props) => {
    const {
        name,
        text,
        rating,
        setName,
        setText,
        resetValue,
        incrementRating,
        decrementRating
    } = userStateFacade();

    return (
        <div ref={() => console.log('displayed')} className={'review-panel'}>
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

                <button type="button" >Send</button>
                <button type="button" onClick={() => resetValue()}>Reset</button>
            </form>
        </div>
    )
}
