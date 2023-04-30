import { RootState } from '../index'

export const getCurrenciesState = (state: RootState) => {
	return state.currencies
}
