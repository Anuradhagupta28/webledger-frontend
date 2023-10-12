// reducers/dataSaveReducer.js
import { SET_DATA_SAVE, DETA,ADD_USER_DATA_LOGIN ,FAV ,ADD_USER_DATA_LOGIN_FAIL,SIGN,SIGNFAIL} from "./receipeAction";


const initialState ={
  receipe:[],
  details:[],
  favHistory:[],
  favourite:[],
  login:{},
  sign:{}
}
  



const dataSaveReducer = (state = initialState, action) => {
  console.log("payload",action.payload)
  switch (action.type) {
    case SET_DATA_SAVE:
      return {
        ...state,
        receipe: action.payload
      }

      case DETA:
        return {
          ...state,
          details: action.payload
        }

        case FAV:
        return {
          // favHistory: [...state.favHistory, state.favourite], 
          // Store the previous presentData in dataHistory
          ...state,
          favourite: [...state.favourite,action.payload] 
        }

        case ADD_USER_DATA_LOGIN:
          return {
            ...state,
            login: action.payload
          }
          case ADD_USER_DATA_LOGIN_FAIL:
            return {
              ...state,
              login: false
            }

            case SIGN:
              return {
                ...state,
                sign: action.payload
              }
              
              case SIGNFAIL:
                return {
                  ...state,
                  sign: false
                }
    default:
      return state;
  }
};

export default dataSaveReducer;

  