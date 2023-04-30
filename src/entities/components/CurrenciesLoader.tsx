import { ReactNode, useEffect } from 'react'
import { useAppDispatch } from '~/shared/store'
import { loadCurrenciesList } from '~/shared/store/currencies'

interface IProps {
	children: ReactNode
}

export const CurrenciesLoader = ({ children }: IProps) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadCurrenciesList())
	}, [])

	return <>{children}</>
}
