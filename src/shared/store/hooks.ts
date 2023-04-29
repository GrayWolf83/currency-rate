import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
	useStore,
} from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import type { AppActions } from './actions'
import { RootState } from './index'

export const useAppDispatch = useDispatch<
	ThunkDispatch<RootState, void, AppActions>
>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = useStore<RootState>
