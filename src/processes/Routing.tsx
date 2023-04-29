import { Home } from '../pages'
import { CurrenciesLoader } from '~/entities/components'

export const Routing = () => {
	return (
		<CurrenciesLoader>
			<Home />
		</CurrenciesLoader>
	)
}
