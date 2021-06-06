import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { accountReducer, depositReducer } from './reducers/reducers.js'

const reducer = combineReducers({
    account:accountReducer,
    deposit:depositReducer,
    // withdraw:withdrawReducer,
    // balance:balanceReducer,
    // transfer:transferReducer,
    

})

const middleware = [thunk];

const store = createStore(
    reducer,
    
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;