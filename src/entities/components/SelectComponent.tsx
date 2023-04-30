import { FC } from 'react'
import { Select } from 'antd'
import { Currency, CurrencyProps } from '~/shared/models'

interface ISelectProps {
	data: Currency
	onChange: (value: string) => void
}

export const SelectComponent: FC<ISelectProps> = ({ data, onChange }) => {
	const handleChange = (value: string) => {
		onChange(value)
	}

	const values: CurrencyProps[] = Object.values(data)

	return (
		<>
			<Select
				onChange={handleChange}
				showSearch
				size='large'
				placeholder='Select currency'
				defaultValue={values[0].CharCode}
				optionFilterProp='children'>
				{values.map((value) => (
					<Select.Option key={value.CharCode} value={value.CharCode}>
						<img
							style={{ width: '20px', marginRight: '10px' }}
							alt={value.Name}
							src={`flags/${value.CharCode}.png` || ''}
						/>
						{value.CharCode} - {value.Name}
					</Select.Option>
				))}
			</Select>
		</>
	)
}
