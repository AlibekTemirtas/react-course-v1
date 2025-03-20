import {useReducer} from "react";
import {reviewFormReducer} from "./user-form-reducer.jsx";
import {DEFAULT_REVIEW_FORM_VALUE, REVIEW_FORM_ACTION} from "./actions.js";
import {RATING_MAX, RATING_MIN} from "./constants.js";

export const userStateFacade = () => {
    const [state, dispatch] = useReducer(reviewFormReducer, DEFAULT_REVIEW_FORM_VALUE);

    function setName(value) {
        dispatch({
            type: REVIEW_FORM_ACTION.SET_NAME,
            payload: value
        });
    }

    function setText(value) {
        dispatch({
            type: REVIEW_FORM_ACTION.SET_TEXT,
            payload: value
        });
    }

    function resetValue(value) {
        dispatch({
            type: REVIEW_FORM_ACTION.RESET_FORM,
            payload: value
        });
    }

    function incrementRating() {
        dispatch({
            type: REVIEW_FORM_ACTION.INCREMENT_RATING
        });
    }

    function decrementRating() {
        dispatch({
            type: REVIEW_FORM_ACTION.DECREMENT_RATING
        });
    }

    return {
        setName,
        setText,
        resetValue,
        incrementRating,
        decrementRating,
        ...state
    }
}
