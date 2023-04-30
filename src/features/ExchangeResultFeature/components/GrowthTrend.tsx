import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'

interface IProps {
	growthTrend: number
}

function GrowthTrend({ growthTrend }: IProps) {
	const grows = growthTrend < 0
	const colorTrend = grows ? 'red' : 'green'

	return (
		<>
			{grows ? (
				<CaretDownOutlined
					style={{ color: colorTrend, fontSize: '0.8rem' }}
				/>
			) : (
				<CaretUpOutlined
					style={{ color: colorTrend, fontSize: '0.8rem' }}
				/>
			)}
			<span style={{ color: colorTrend, fontSize: '0.8rem' }}>
				{Math.abs(Math.round(growthTrend * 100) / 100)}%
			</span>
		</>
	)
}

export default GrowthTrend
