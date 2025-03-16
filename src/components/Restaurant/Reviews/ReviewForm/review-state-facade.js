import {useReducer} from "react";
import {reviewFormReducer} from "./user-form-reducer.jsx";
import {DEFAULT_REVIEW_FORM_VALUE, REVIEW_FORM_ACTION} from "./actions.js";

export const ReviewStateFacade = () => {
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

    function setRating(value) {
        dispatch({
            type: REVIEW_FORM_ACTION.SET_RATING,
            payload: value
        });
    }

    function resetValue(value) {
        dispatch({
            type: REVIEW_FORM_ACTION.RESET_FORM,
            payload: value
        });
    }

    return {
        setName,
        setText,
        setRating,
        resetValue,
        ...state
    }
}
