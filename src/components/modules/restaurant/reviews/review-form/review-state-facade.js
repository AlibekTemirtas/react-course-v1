import {useCallback, useReducer} from "react";
import {reviewFormReducer} from "./user-form.jsx";
import {DEFAULT_REVIEW_FORM_VALUE, REVIEW_FORM_ACTION} from "./review-actions.js";

export const userStateFacade = () => {
    const [state, dispatch] = useReducer(reviewFormReducer, DEFAULT_REVIEW_FORM_VALUE);

    const setName = useCallback((value) => {
        dispatch({
            type: REVIEW_FORM_ACTION.SET_NAME,
            payload: value
        });
    }, []);

    const setText = useCallback((value) => {
        dispatch({
            type: REVIEW_FORM_ACTION.SET_TEXT,
            payload: value
        });
    }, []);

    const resetValue = useCallback((value) => {
        dispatch({
            type: REVIEW_FORM_ACTION.RESET_FORM,
            payload: value
        });
    }, []);

    const incrementRating = useCallback(() => {
        dispatch({
            type: REVIEW_FORM_ACTION.INCREMENT_RATING
        });
    }, []);

    const decrementRating = useCallback(() => {
        dispatch({
            type: REVIEW_FORM_ACTION.DECREMENT_RATING
        });
    }, []);

    return {
        setName,
        setText,
        resetValue,
        incrementRating,
        decrementRating,
        ...state
    }
}
