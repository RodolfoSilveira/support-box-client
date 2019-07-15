import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ducks from './ducks'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    ducks,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagas)

export default store