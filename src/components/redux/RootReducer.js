import userReducer from './user/userReducer'
import socketReducer from './socket/socketReducer'
import cartReducer from './cart/cartReducer'
import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const socketPersistConfig = {
    key: 'socket',
    storage: storage,
    blacklist: ['state']
  }

export default combineReducers({
    user:userReducer,
    cart:cartReducer,
    socket:persistReducer(socketPersistConfig,socketReducer)
})