import { useState } from 'react'
import { CurrencyInputFeature, CurrencySelectFeature, ExchangeResultFeature } from '~/features'
import { Unicodes } from '~/shared/initialData'

export const CurrenciesRateWidget = () => {

	const [exchange, setExchange] = useState({
		amount: 1,
		from: 'USD',
		to: 'KGS',
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
				amount={exchange.amount}
				baseCurrencyKey={exchange.from}
				targetCurrencyKey={exchange.to}
			/>
		</>
	)

}
