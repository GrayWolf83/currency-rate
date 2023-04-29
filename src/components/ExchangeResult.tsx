import { Skeleton, Space } from 'antd'
import React from 'react'
import { useSelector, useStore } from 'react-redux'
import { FallOutlined } from '@ant-design/icons'
import LineChart from './LineChart'

function ExchangeResult() {
    const exchangeResult = useSelector((state: number) => state.exchange.result)
    const store = useStore()
    const targetCurrency = store.getState().targetCurrency
    const baseCurrency = store.getState().baseCurrency
    const currentExchangeRate = Object.values(targetCurrency.exchangeRateHistory[0])[0]
    const previousExchangeRate = Object.values(targetCurrency.exchangeRateHistory[0])[0]
    const growthTrend = ((currentExchangeRate - previousExchangeRate) / previousExchangeRate) * 100
    const colorTrend = growthTrend > 0 ? "red" : "green"
    return (
        <Space
            direction="vertical"
            size="middle"
            style={{
                display: 'flex',
            }}
        >
            <h3>Exchange result</h3>
            {targetCurrency.value && exchangeResult ?
                <Space
                    size="middle"
                    style={{
                        display: 'flex',
                    }}
                >
                    {targetCurrency.flag}
                    <h1>{exchangeResult} {targetCurrency.unicodeSymbol}</h1>
                </Space> :
                <Space>
                    <Skeleton.Button
                        active
                        size='small'
                    />
                    <Skeleton.Input
                        active
                        size='small'
                    />
                    <Skeleton.Button
                        active
                        size='small'
                    />
                </Space>
            }
            <Space>
                <h4>1 {baseCurrency.unicodeSymbol} = {currentExchangeRate}{targetCurrency.unicodeSymbol}</h4>
                {<FallOutlined color={colorTrend} size={20} />} <p>{Math.abs(growthTrend)}</p>
                <LineChart data={targetCurrency.exchangeRateHistory} />
            </Space>
        </Space>
    )
}

export default ExchangeResult