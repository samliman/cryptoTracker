import { combineReducers } from ReduxLogger;
import CryptoReducer from './CryptoReducer';

export default combineReducers({
    crypto: CryptoReducer
});