import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension'
import { currencyReducer } from './currencies/reducer'

const rootReducer = persistReducer(
	{ key: 'redux', storage: storage },
	combineReducers({ currencies: currencyReducer }),
)

export const store = createStore(
	rootReducer,
	composeWithDevToolsDevelopmentOnly(applyMiddleware(thunkMiddleware)),
)

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
export { useAppDispatch, useAppSelector } from './hooks'
