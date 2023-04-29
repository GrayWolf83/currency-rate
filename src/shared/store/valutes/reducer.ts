import { Valute } from '~/shared/models'
import {
	ValutesActions,
	VALUTES_LOADING_END,
	VALUTES_LOADING_START,
	VALUTES_LOADING_SUCCESS,
} from './actions'

interface ValutesState {
	valutes: Valute | null
	loading: boolean
	date: string
}

const initialState: ValutesState = {
	valutes: null,
	loading: false,
	date: '',
}

export function valutesReducer(state = initialState, action: ValutesActions) {
	switch (action.type) {
		case VALUTES_LOADING_START:
			return { ...state, loading: true }

		case VALUTES_LOADING_END:
			return { ...state, loading: false }

		case VALUTES_LOADING_SUCCESS:
			return {
				...state,
				valutes: action.payload.Valute,
				date: action.payload.Date,
			}

		default:
			return state
	}
}
