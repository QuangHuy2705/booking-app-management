import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import fbConfig from '../config/fbConfig'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig),
))

export default store