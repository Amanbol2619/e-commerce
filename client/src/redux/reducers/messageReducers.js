import { SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE, CLEAR_MESSAGES } from "../constants/messageConstants.js"; 

 const INITAL_STATE = {
     successMsg: '',
     errorMsg: ''
 }


 const messageReducer =  (state= INITAL_STATE, action) => {
     switch (action.type) {
         case SHOW_SUCCESS_MESSAGE:
           return {
               ...state,
               successMsg: action.payload
           }

           case SHOW_ERROR_MESSAGE:
           return {
               ...state,
               errorMsg: action.payload
           }

           case CLEAR_MESSAGES:
               return {
                   successMsg: '',
                   errorMsg: ''
               }

               default:
                   return state;
        }

 }

 export default messageReducer;