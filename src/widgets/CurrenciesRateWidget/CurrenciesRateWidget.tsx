import { useState } from 'react'
import { CurrencyInputFeature, CurrencySelectFeature } from '~/features'
import { ExchangeResultFeature } from '~/features/ExchangeResultFeature'

export const CurrenciesRateWidget = () => {
	const [exchange, setExchange] = useState({
		amount: 1,
		from: "USD",
		to: "AUD"
	})

	function handleChange(name: string, value: number | string) {
		setExchange((prev) => ({ ...prev, [name]: value }))
	}


	return (
		<>
			<CurrencyInputFeature />
			<CurrencySelectFeature />
			<CurrencySelectFeature />
			<ExchangeResultFeature
				baseCurrencyKey={exchange.from}
				targetCurrencyKey={exchange.to}
			/>
		</>
	)
}