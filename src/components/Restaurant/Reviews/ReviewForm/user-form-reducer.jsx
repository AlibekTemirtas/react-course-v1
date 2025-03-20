import {DEFAULT_REVIEW_FORM_VALUE, REVIEW_FORM_ACTION} from "./actions.js";

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

        case REVIEW_FORM_ACTION.SET_RATING:
            return {
                ...state,
                rating: payload
            }

        case REVIEW_FORM_ACTION.RESET_FORM:
            return {
                ...DEFAULT_REVIEW_FORM_VALUE
            }

        default:
            return state;
    }
}
