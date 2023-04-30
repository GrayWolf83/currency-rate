import { Skeleton, Space } from 'antd'
import React, { useMemo } from 'react'
import { CaretDownOutlined, CaretUpOutlined, FallOutlined, RiseOutlined } from '@ant-design/icons'
import { LineChart } from './components/LineChart'
import { useAppSelector, useAppStore } from '~/shared/store'
import { getCurrenciesState } from '~/shared/store/currencies'
import GrowthTrend from './components/GrowthTrend'

interface IPrios {
    amount: number
    baseCurrencyKey: string
    targetCurrencyKey: string
}

export function ExchangeResultFeature({ amount, baseCurrencyKey, targetCurrencyKey }: IPrios) {
    const { currencies } = useAppSelector(getCurrenciesState)
    const baseCurrency = currencies[baseCurrencyKey]
    const targetCurrency = currencies[targetCurrencyKey]
    const currentExchangeRate = baseCurrency?.HistoryRate[0].value / targetCurrency.HistoryRate[0].value
    const previousExchangeRate = baseCurrency?.HistoryRate[1].value / targetCurrency.HistoryRate[0].value
    const growthTrend = ((currentExchangeRate - previousExchangeRate) / previousExchangeRate) * 100

    const exchangeResult = Math.round(100 * amount * baseCurrency.HistoryRate[0].value / targetCurrency.HistoryRate[0].value) / 100

    console.log("render Result")

    const chart = useMemo(() => <LineChart data={{ base: baseCurrency.HistoryRate, target: targetCurrency.HistoryRate }} />, [baseCurrency.HistoryRate, targetCurrency.HistoryRate]);

    return (
        <Space
            direction="vertical"
            size="middle"
            style={{
                display: 'flex',
            }}
        >
            <h1>Exchange result</h1>

            <Space
                size="middle"
                style={{
                    display: 'flex',
                }}
            >
                <span
                    style={{ fontSize: '2rem', fontWeight: 700 }}
                >
                    {exchangeResult} {targetCurrency.Unicode}
                </span>
            </Space>


            <Space
                size="middle"
                style={{
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: "flex-end",
                }}
            >
                <span
                    style={{ fontSize: "1.5rem", fontWeight: 700 }}
                > 1 {baseCurrency.Unicode} = {Math.round(currentExchangeRate * 100) / 100}{targetCurrency.Unicode}
                </span>
                <GrowthTrend growthTrend={growthTrend} />
            </Space>
            <div style={{ maxWidth: 200 }}>
                <span>ExchangeRate dynamic</span>
                {chart}
            </div>

        </Space>
    )
}
