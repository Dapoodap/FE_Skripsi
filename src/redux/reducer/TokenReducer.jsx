import { REMOVE_TOKEN, SET_TOKEN } from "../action/TokenAction"

const auth = {
  Token : ""
}

function TokenReducer(state=auth,action) {
  switch (action.type) {
    case SET_TOKEN:
      // console.log(initial.JumlahKue)
      return {
        ...state,
        Token: action.payload
      }  ;
      case REMOVE_TOKEN:
            return {
                ...state,
                Token: "" // Atau dapat diatur ke null atau nilai default lainnya
            };
    default: return state;
  }
  
}

export default TokenReducer