import {
  ACCOUNT_CREATE_REQUEST,
  ACCOUNT_CREATE_SUCCESS,
  ACCOUNT_CREATE_FAIL,
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
  DEPOSIT_FAIL,
  DEPOSIT_RESET,
  ACCOUNT_CREATE_RESET,
  WITHDRAW_REQUEST,
  WITHDRAW_SUCCESS,
  WITHDRAW_FAIL,
  WITHDRAW_RESET,
  BALANCE_REQUEST,
  BALANCE_SUCCESS,
  BALANCE_FAIL,
  BALANCE_RESET,
  TRANSFER_REQUEST,
  TRANSFER_SUCCESS,
  TRANSFER_FAIL,
  TRANSFER_RESET,
} from "../constants/constants.js";

export const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_CREATE_REQUEST:
      return { loading: true };
    case ACCOUNT_CREATE_SUCCESS:
      return { loading: false, account_info: action.payload };
    case ACCOUNT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ACCOUNT_CREATE_RESET: // new ehh
      return (state = {});
    default:
      return state;
  }
};

export const depositReducer = (state = {}, action) => {
  switch (action.type) {
    case DEPOSIT_REQUEST:
      return { loading: true };
    case DEPOSIT_SUCCESS:
      return { loading: false, deposit_info: action.payload };
    case DEPOSIT_FAIL:
      return { loading: false, error: action.payload };
    case DEPOSIT_RESET: // new ehh
      return (state = {});
    default:
      return state;
  }
};

export const withdrawReducer = (state = {}, action) => {
  switch (action.type) {
    case WITHDRAW_REQUEST:
      return { loading: true };
    case WITHDRAW_SUCCESS:
      return { loading: false, withdraw_info: action.payload };
    case WITHDRAW_FAIL:
      return { loading: false, error: action.payload };
    case WITHDRAW_RESET: // new ehh
      return (state = {});
    default:
      return state;
  }
};

export const balanceReducer = (state = {}, action) => {
  switch (action.type) {
    case BALANCE_REQUEST:
      return { loading: true };
    case BALANCE_SUCCESS:
      return { loading: false, balance_info: action.payload };
    case BALANCE_FAIL:
      return { loading: false, error: action.payload };
    case BALANCE_RESET: 
      return (state = {});
    default:
      return state;
  }
};


export const transferReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSFER_REQUEST:
      return { loading: true };
    case TRANSFER_SUCCESS:
      return { loading: false, transfer_info: action.payload };
    case TRANSFER_FAIL:
      return { loading: false, error: action.payload };
    case TRANSFER_RESET: 
      return (state = {});
    default:
      return state;
  }
};
