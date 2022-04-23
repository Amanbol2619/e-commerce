import { CLEAR_MESSAGES } from "../constants/messageConstants.js";


export const clearMessages = () => dispatch => {
    dispatch({
        type: CLEAR_MESSAGES,
    });
};