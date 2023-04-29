import { Typography } from 'antd'
import { SelectComponent } from '~/entities/components/SelectComponent'
import { useAppSelector } from '~/shared/store'
import { getCurrenciesState } from '~/shared/store/currencies'
import { CurrenciesRateWidget } from '~/widgets'

export const Home = () => {
	const { currencies } = useAppSelector(getCurrenciesState)

	const handleSelectChange = (value: string) => {
		console.log(value)
	}

	return (
		<>
			<Typography.Title>Home page</Typography.Title>
			{currencies && (
				<SelectComponent
					onChange={handleSelectChange}
					data={currencies}
				/>
			)}
			<CurrenciesRateWidget />
		</>
	)
}
