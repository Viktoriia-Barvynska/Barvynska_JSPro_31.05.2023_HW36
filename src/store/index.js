import { createStore, combineReducers } from "redux";

import modal from '../store/reducers/modal';
import contact from '../store/reducers/contacts';


const rootReducer = combineReducers({
    modal: modal,
    contacts: contact,
  });
const store = createStore(rootReducer)

export default store;