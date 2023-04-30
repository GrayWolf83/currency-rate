import { Row } from 'antd'
import { useState } from 'react'
import { MyButton } from '~/entities/components/UI'
import { CurrencyInputFeature, CurrencySelectFeature } from '~/features'
import { ExchangeResultFeature } from '~/features/ExchangeResultFeature'
import { Unicodes } from '~/shared/initialData'

export const CurrenciesRateWidget = () => {
	const [exchange, setExchange] = useState({
		amount: 1,
		from: 'RUB',
		to: 'AUD',
	})

	function handleChange(name: string, value: number | string) {
		setExchange((prev) => ({ ...prev, [name]: value }))
	}

	const handleButton = () => {
		setExchange((prev) => ({
			...prev,
			from: exchange.to,
			to: exchange.from,
		}))
	}

	return (
		<>
			<Row
				align='middle'
				justify='space-between'
				style={{ padding: '10px' }}>
				<CurrencyInputFeature
					name='amount'
					onChange={handleChange}
					unicode={Unicodes[exchange.from]}
					value={exchange.amount}
				/>
				<CurrencySelectFeature
					name='from'
					onChange={handleChange}
					value={exchange.from}
				/>
				<MyButton onClick={handleButton} />
				<CurrencySelectFeature
					name='to'
					onChange={handleChange}
					value={exchange.to}
				/>
			</Row>

			<ExchangeResultFeature
				baseCurrencyKey={exchange.from}
				targetCurrencyKey={exchange.to}
				amount={exchange.amount}
			/>
		</>
	)
}
