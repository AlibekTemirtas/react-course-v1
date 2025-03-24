import {DEFAULT_REVIEW_FORM_VALUE, REVIEW_FORM_ACTION} from "./review-actions.js";
import {RATING_MAX, RATING_MIN} from "./review-constants.js";

export function reviewFormReducer(state, {type, payload}) {
    switch (type) {
        case REVIEW_FORM_ACTION.SET_NAME:
            return {
                ...state,
                name: payload
            }

        case REVIEW_FORM_ACTION.SET_TEXT:
            return {
                ...state,
                text: payload
            }

        case REVIEW_FORM_ACTION.INCREMENT_RATING:
            return {
                ...state,
                rating: Math.min(state.rating + 1, RATING_MAX)
            }

        case REVIEW_FORM_ACTION.DECREMENT_RATING:
            return {
                ...state,
                rating: Math.max(state.rating - 1, RATING_MIN)
            }

        case REVIEW_FORM_ACTION.RESET_FORM:
            return {
                ...DEFAULT_REVIEW_FORM_VALUE
            }

        default:
            return state;
    }
}
