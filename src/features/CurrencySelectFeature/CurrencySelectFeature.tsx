import { FC } from 'react'
import { SelectComponent } from '~/entities/components'

import { useAppSelector } from '~/shared/store'
import { getCurrenciesState } from '~/shared/store/currencies'

interface CurrencySelectFeatureProps {
	onChange: (name: string, value: string) => void
	name: string
	value: string
}

export const CurrencySelectFeature: FC<CurrencySelectFeatureProps> = ({
	value,
	name,
	onChange,
}) => {
	const { currencies } = useAppSelector(getCurrenciesState)

	const handleSelectChange = (value: string) => {
		onChange(name, value)
	}

	return (
		<>
			{Boolean(Object.keys(currencies).length) && (
				<SelectComponent
					onChange={handleSelectChange}
					data={currencies}
					value={value}
				/>
			)}
		</>
	)
}
