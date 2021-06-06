import axios from "axios";
import{
    ACCOUNT_CREATE_REQUEST,
    ACCOUNT_CREATE_SUCCESS,
    ACCOUNT_CREATE_FAIL,
    DEPOSIT_REQUEST,
    DEPOSIT_SUCCESS,
    DEPOSIT_FAIL
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