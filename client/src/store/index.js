import { createStore, combineReducers } from 'redux'
import {categoryReducer} from './categoryReducer'

const rootReducer = combineReducers({
   category: categoryReducer
})

export const store = createStore(rootReducer);