import { Line } from '@ant-design/plots'
import { ExchangeRate } from '~/shared/models'

interface DateProps {
	base: ExchangeRate[]
	target: ExchangeRate[]
}

interface IProps {
	data: DateProps
}
export function LineChart({ data }: IProps) {
	const chartData = [...data.base]
	chartData.sort((a, b) => (new Date(b.date) < new Date(a.date) ? 1 : -1))
	chartData.forEach((item, index) => {
		item.value = item.value / data.target[index].value
		item.date = new Date(item.date).toLocaleDateString()
	})
	const minValue = Math.min(...chartData.map((d) => d.value))
	const config = {
		data: chartData,
		xField: 'date',
		yField: 'value',
		height: 150,

		yAxis: {
			min: minValue,
			tickInterval: 2,
			label: {
				style: {
					fontSize: 8,
				},
			},
		},
		xAxis: {
			tickCount: 2,
			label: {
				style: {
					fontSize: 8,
				},
			},
		},
	}
	return (
		<div className='line-chart'>
			<Line {...config} />
		</div>
	)
}
