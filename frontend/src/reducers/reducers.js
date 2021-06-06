import{
    ACCOUNT_CREATE_REQUEST,
    ACCOUNT_CREATE_SUCCESS,
    ACCOUNT_CREATE_FAIL,
    DEPOSIT_REQUEST,
    DEPOSIT_SUCCESS,
    DEPOSIT_FAIL,
    DEPOSIT_RESET,
    ACCOUNT_CREATE_RESET
} from '../constants/constants.js'

export const accountReducer = (state = {}, action) => {
    switch (action.type) {
        case  ACCOUNT_CREATE_REQUEST:
      return { loading: true };
      case ACCOUNT_CREATE_SUCCESS:
        return { loading: false, account_info: action.payload};
      case  ACCOUNT_CREATE_FAIL:
        return { loading: false, error: action.payload };
        case ACCOUNT_CREATE_RESET: // new ehh  
      return {state:{}}
      default:
        return state;
    }
}

export const depositReducer = (state = {}, action) => {
  switch (action.type) {
      case  DEPOSIT_REQUEST:
    return { loading: true };
    case DEPOSIT_SUCCESS:
      return { loading: false, deposit_info: action.payload};
    case  DEPOSIT_FAIL:
      return { loading: false, error: action.payload };
      case DEPOSIT_RESET: // new ehh  
      return {state:{}, error:{}}
    default:
      return state;
  }
}