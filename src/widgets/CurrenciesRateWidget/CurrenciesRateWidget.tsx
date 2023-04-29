import { useState } from 'react'
import { CurrencyInputFeature, CurrencySelectFeature } from '~/features'
import { ExchangeResultFeature } from '~/features/ExchangeResultFeature'
import { Unicodes } from '~/shared/initialData'

export const CurrenciesRateWidget = () => {
	const [exchange, setExchange] = useState({
		amount: 1,
		from: 'USD',
		to: 'AUD',
	})

	function handleChange(name: string, value: number | string) {
		setExchange((prev) => ({ ...prev, [name]: value }))
	}

	return (
		<>
			<CurrencyInputFeature
				name='amount'
				onChange={handleChange}
				unicode={Unicodes[exchange.from]}
				value={exchange.amount}
			/>
			<CurrencySelectFeature />
			<CurrencySelectFeature />
			<ExchangeResultFeature
				baseCurrencyKey={exchange.from}
				targetCurrencyKey={exchange.to}
			/>
		</>
	)
}
