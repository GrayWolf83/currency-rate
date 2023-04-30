import { Typography } from 'antd'
import { CurrenciesRateWidget } from '~/widgets'

export const Home = () => {
	return (
		<>
			<Typography.Title
				level={2}
				style={{ textAlign: 'center', padding: 10 }}>
				Конвертация валют
			</Typography.Title>
			<CurrenciesRateWidget />
		</>
	)
}
