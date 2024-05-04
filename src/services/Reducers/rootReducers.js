import {combineReducers} from 'redux'
import cartItems from './reducers'

export default combineReducers({
        cartItems, //if more than one reducer then we define by comma separated
    })