import React from 'react'
import { Line } from '@ant-design/plots';

function LineChart(data: any[]) {
    const chartData = [...data]
    chartData.sort((a, b) => b - a);
    const config = {
        data: chartData,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
    };
    return (
        <Line {...config} />
    )
}

export default LineChart