import { actionTypes } from "./ActionTypes";


export const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    education: "",
    feedback: "",
    term: false,
    quantity:0
  };

  export const reducer = (state, action) => {
    switch(action.type){
      case actionTypes.INPUT :
      return {
          ...state,
          [action.payload.name]: action.payload.value
        }
        case actionTypes.TOGGLE :
        return {
         ...state,
         term: !state.term
      
        }    
        case actionTypes.INCREMENT :
          return {
           ...state,
           quantity:state.quantity-action.payload

          }  
        case actionTypes.DECREMENT :
          return {
           ...state,
           quantity:state.quantity+action.payload

          }  

        default:
        return state
    }

  };