
import  { createStore, combineReducers } from 'redux';
import rootReducer from './rootReducer';
import dataReducer from './dataReducer';

const reducers = combineReducers({
    rootReducer,
    dataReducer
   
});

const store = createStore(reducers);

export default store;