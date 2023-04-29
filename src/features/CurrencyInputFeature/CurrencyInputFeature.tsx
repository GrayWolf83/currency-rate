import { InputNumber } from 'antd'

interface IProps {
	name: string
	value: number
	unicode: string
	onChange: (name: string, value: number) => void
}

export const CurrencyInputFeature = ({
	name,
	value,
	unicode,
	onChange,
}: IProps) => {
	const handleChange = (val: number | null) => {
		if (val && val > 0) {
			onChange(name, val)
		}
	}

	return (
		<InputNumber
			addonBefore={unicode}
			name={name}
			value={value}
			onChange={handleChange}
		/>
	)
}
