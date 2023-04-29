import { ReactNode, useEffect } from 'react'
import { useAppDispatch } from '~/shared/store'
import { loadValutes } from '~/shared/store/valutes'

interface IProps {
	children: ReactNode
}

export const ValutesLoader = ({ children }: IProps) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadValutes())
	}, [])

	return <>{children}</>
}
