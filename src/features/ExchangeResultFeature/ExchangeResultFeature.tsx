import { Skeleton, Space } from 'antd'
import React from 'react'
import { FallOutlined } from '@ant-design/icons'
import LineChart from './components/LineChart'
import { useAppSelector, useAppStore } from '~/shared/store'
import { getCurrenciesState } from '~/shared/store/currencies'

interface IPrios {
    baseCurrencyKey: string
    targetCurrencyKey: string
}

export function ExchangeResultFeature({ baseCurrencyKey, targetCurrencyKey }: IPrios) {
    const { currencies } = useAppSelector(getCurrenciesState)
    const store = useAppStore()
    const targetCurrency = currencies[baseCurrencyKey]
    const baseCurrency = currencies[targetCurrencyKey]
    const currentExchangeRate = targetCurrency?.HistoryRate[0].value
    const previousExchangeRate = targetCurrency?.HistoryRate[1].value
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
            {currentExchangeRate ?
                <Space
                    size="middle"
                    style={{
                        display: 'flex',
                    }}
                >
                    {/* {targetCurrency.flag} */}
                    {/* <h1>{exchangeResult} {targetCurrency.unicodeSymbol}</h1> */}
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
                <h4>1 {baseCurrency.Unicode} = {currentExchangeRate}{targetCurrency.Unicode}</h4>
                {<FallOutlined color={colorTrend} size={20} />} <p>{Math.abs(growthTrend)}</p>
                {/* <LineChart data={targetCurrency.exchangeRateHistory} /> */}
            </Space>
        </Space>
    )
}
