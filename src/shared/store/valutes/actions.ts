import { ThunkAction } from 'redux-thunk'
import { ServerData } from '~/shared/models'
import { RootState } from '../index'

export const VALUTES_LOADING_START = 'VALUTES_LOADING_START'
export const VALUTES_LOADING_SUCCESS = 'VALUTES_LOADING_SUCCESS'
export const VALUTES_LOADING_END = 'VALUTES_LOADING_END'

interface ValutesLoadingStart {
	type: typeof VALUTES_LOADING_START
}

interface ValutesLoadingEnd {
	type: typeof VALUTES_LOADING_END
}

interface ValutesLoadingSuccess {
	type: typeof VALUTES_LOADING_SUCCESS
	payload: ServerData
}

export function valutesLoadingStartActionCreator(): ValutesLoadingStart {
	return { type: VALUTES_LOADING_START }
}

export function valutesLoadingSuccessActionCreator(
	payload: ServerData,
): ValutesLoadingSuccess {
	return { type: VALUTES_LOADING_SUCCESS, payload }
}

export function valutesLoadingEndActionCreator(): ValutesLoadingEnd {
	return { type: VALUTES_LOADING_END }
}

export function loadValutes(): ThunkAction<
	void,
	RootState,
	void,
	ValutesActions
> {
	return async (dispatch) => {
		dispatch(valutesLoadingStartActionCreator())

		try {
			const data = await valutesService.loadValutes()
			dispatch(valutesLoadingSuccessActionCreator(data))
		} catch (error) {
			console.error(error)
		} finally {
			dispatch(valutesLoadingEndActionCreator())
		}
	}
}

export type ValutesActions =
	| ValutesLoadingStart
	| ValutesLoadingEnd
	| ValutesLoadingSuccess
