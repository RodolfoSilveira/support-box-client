import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ducks from './ducks'
import sagas from './sagas'
import { routerMiddleware } from 'connected-react-router'
import history from '../routes/history'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
]

const store = createStore(
    ducks,
    composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(sagas)

export default store