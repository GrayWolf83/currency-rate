import { Home } from './pages'
import { getValutesState } from '~/shared/store/valutes'
import { useAppSelector } from './shared/store'
import { ValutesLoader } from '~/components'

function App() {
	const { valutes, loading, date } = useAppSelector(getValutesState)

	console.log('valutes', valutes)
	console.log('loading', loading)
	console.log('date', date)

	return (
		<ValutesLoader>
			<Home />
		</ValutesLoader>
	)
}

export default App
