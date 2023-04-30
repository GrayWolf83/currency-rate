import { Space } from 'antd'
import { useState } from 'react'
import { CurrencyInputFeature, CurrencySelectFeature, ExchangeResultFeature } from '~/features'
import { Unicodes } from '~/shared/initialData'
import { MyButton } from '~/entities/components/UI'

export const CurrenciesRateWidget = () => {
  const [exchange, setExchange] = useState({
    amount: 1,
    from: 'USD',
    to: 'KGS',
  })

  function handleChange(name: string, value: number | string) {
    setExchange((prev) => ({ ...prev, [name]: value }))
  }

  const handleButton = () => {
    setExchange((prev) => ({ ...prev, from: exchange.to, to: exchange.from }))
  }

  return (
    <>
      <Space>
        <CurrencyInputFeature
          name='amount'
          onChange={handleChange}
          unicode={Unicodes[exchange.from]}
          value={exchange.amount}
        />
        <CurrencySelectFeature onChange={handleChange} name='from' value={exchange.from} />
        <MyButton onClick={handleButton} />
        <CurrencySelectFeature onChange={handleChange} name='to' value={exchange.to} />
      </Space>
      <ExchangeResultFeature amount={exchange.amount} baseCurrencyKey={exchange.from} targetCurrencyKey={exchange.to} />
    </>
  )
}
