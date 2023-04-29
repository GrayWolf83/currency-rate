import { Currency } from '~/shared/models'
import {
	CurrencyActions,
	CURRENCIES_LOADING_END,
	CURRENCIES_LOADING_START,
	CURRENCIES_LOADING_SUCCESS,
} from './actions'

export interface CurrenciesState {
	currencies: Currency
	loading: boolean
	date: string
}

const initialState: CurrenciesState = {
	currencies: {},
	loading: false,
	date: '',
}

export function currencyReducer(state = initialState, action: CurrencyActions) {
	switch (action.type) {
		case CURRENCIES_LOADING_START:
			return { ...state, loading: true }

		case CURRENCIES_LOADING_END:
			return { ...state, loading: false }

		case CURRENCIES_LOADING_SUCCESS:
			return {
				...state,
				currencies: action.payload.currencies,
				date: action.payload.date,
			}

		default:
			return state
	}
}
