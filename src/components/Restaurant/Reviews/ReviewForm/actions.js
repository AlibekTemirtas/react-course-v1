import {RATING_MIN} from "./constants.js";

export const DEFAULT_REVIEW_FORM_VALUE = {
    name: '',
    text: '',
    rating: RATING_MIN
};

export const REVIEW_FORM_ACTION = {
    SET_NAME: 'SET_NAME',
    SET_TEXT: 'SET_TEXT',
    INCREMENT_RATING: 'INCREMENT_RATING',
    DECREMENT_RATING: 'DECREMENT_RATING',
    RESET_FORM: 'RESET_FORM'
};
