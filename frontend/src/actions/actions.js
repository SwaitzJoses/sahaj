import axios from "axios";
import{
    ACCOUNT_CREATE_REQUEST,
    ACCOUNT_CREATE_SUCCESS,
    ACCOUNT_CREATE_FAIL,
    DEPOSIT_REQUEST,
    DEPOSIT_SUCCESS,
    DEPOSIT_FAIL,
    WITHDRAW_FAIL,
    WITHDRAW_SUCCESS,
    WITHDRAW_REQUEST,
    BALANCE_REQUEST,
    BALANCE_SUCCESS,
    BALANCE_FAIL,
    TRANSFER_REQUEST,
    TRANSFER_SUCCESS,
    TRANSFER_FAIL
} from '../constants/constants.js'

export const accountCreate = (name) => async (dispatch) => {
    try {
        dispatch({
          type: ACCOUNT_CREATE_REQUEST,
        });
        const { data } = await axios.post(
            "/api/users/",
            { name },
          );
          dispatch({
            type: ACCOUNT_CREATE_SUCCESS,
            payload: data,
          });
        }
        catch (error) {
            dispatch({
              type: ACCOUNT_CREATE_FAIL,
              payload:
                //   error.response && error.response.data.message
                //     ? error.response.data.message
                //     : error.message,
                "Invalid Data",
            });
          }
}

export const depositAmount = (number, deposit) => async (dispatch) => {
  try {
      dispatch({
        type: DEPOSIT_REQUEST,
      });
      const { data } = await axios.put(
          "/api/users/deposit",
          { number, deposit },
        );
        dispatch({
          type: DEPOSIT_SUCCESS,
          payload: data,
        });
      }
      catch (error) {
          dispatch({
            type: DEPOSIT_FAIL,
            payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
              // "Invalid Data",
              // error.message
          });
        }
}
export const withdrawAmount = (number, withdraw) => async (dispatch) => {
  try {
      dispatch({
        type: WITHDRAW_REQUEST,
      });
      const { data } = await axios.put(
          "/api/users/withdraw",
          { number, withdraw },
        );
        dispatch({
          type: WITHDRAW_SUCCESS,
          payload: data,
        });
      }
      catch (error) {
          dispatch({
            type: WITHDRAW_FAIL,
            payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
              // "Invalid Data",
              // error.message
          });
        }
}



export const balanceAmount = (number) => async (dispatch) => {
  try {
    console.log(number)
      dispatch({
        type: BALANCE_REQUEST,
      });
      const { data } = await axios.put(
          "/api/users/balance",
          {number},
        );
        console.log(data)
        dispatch({
          type: BALANCE_SUCCESS,
          payload: data,
        });
      }
      catch (error) {
          dispatch({
            type: BALANCE_FAIL,
            payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
              // "Invalid Data",
              // error.message
          });
        }
}



export const transferAmount = ( number1, number2, transfer) => async (dispatch) => {
  try {
    
      dispatch({
        type: TRANSFER_REQUEST,
      });
      const { data } = await axios.put(
          "/api/users/transfer",
          {number1, number2, transfer},
        );
        // console.log(data)
        dispatch({
          type: TRANSFER_SUCCESS,
          payload: data,
        });
      }
      catch (error) {
          dispatch({
            type: TRANSFER_FAIL,
            payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
              // "Invalid Data",
              // error.message
          });
        }
}


