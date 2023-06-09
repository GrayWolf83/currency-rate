import { Col, Row } from 'antd'
import { useMemo } from 'react'
import { LineChart } from './components/LineChart'
import { useAppSelector } from '~/shared/store'
import { getCurrenciesState } from '~/shared/store/currencies'
import GrowthTrend from './components/GrowthTrend'

interface IPrios {
	amount: number
	baseCurrencyKey: string
	targetCurrencyKey: string
}

export function ExchangeResultFeature({
	amount,
	baseCurrencyKey,
	targetCurrencyKey,
}: IPrios) {
	const { currencies } = useAppSelector(getCurrenciesState)
	const baseCurrency = currencies[baseCurrencyKey] // from
	const targetCurrency = currencies[targetCurrencyKey] //to
	const currentExchangeRate =
		baseCurrency?.HistoryRate[0].value /
		targetCurrency?.HistoryRate[0].value

	const previousExchangeRate =
		baseCurrency?.HistoryRate[1].value /
		targetCurrency?.HistoryRate[0].value
	const growthTrend =
		((currentExchangeRate - previousExchangeRate) / previousExchangeRate) *
		100

	const exchangeResult =
		Math.round(
			(100 * amount * baseCurrency?.HistoryRate[0].value) /
				targetCurrency?.HistoryRate[0].value,
		) / 100

	const chart = useMemo(
		() => (
			<LineChart
				data={{
					base: JSON.parse(
						JSON.stringify(baseCurrency?.HistoryRate) || '[]',
					),
					target: JSON.parse(
						JSON.stringify(targetCurrency?.HistoryRate) || '[]',
					),
				}}
			/>
		),
		[baseCurrency?.HistoryRate, targetCurrency?.HistoryRate],
	)

	return (
		<Row style={{ padding: '10px' }}>
			<Col
				span={window.innerWidth < 768 ? 24 : 12}
				style={{ margin: '10px 0' }}>
				<h3>Exchange result</h3>
				<span
					style={{
						fontSize: '2rem',
						fontWeight: 700,
						display: 'block',
					}}>
					{exchangeResult} {targetCurrency?.Unicode}
				</span>
				<span style={{ fontSize: '1.5rem', fontWeight: 700 }}>
					{' '}
					1 {baseCurrency?.Unicode} ={' '}
					{Math.round(currentExchangeRate * 100) / 100}
					{targetCurrency?.Unicode}
				</span>
				<GrowthTrend growthTrend={growthTrend} />
			</Col>

			<Col
				span={window.innerWidth < 768 ? 24 : 12}
				style={{ margin: '10px 0' }}>
				<span>ExchangeRate dynamic</span>
				{chart}
			</Col>
		</Row>
	)
}
