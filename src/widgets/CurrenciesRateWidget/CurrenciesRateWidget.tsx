import { useState } from 'react'
import { CurrencyInputFeature, CurrencySelectFeature } from '~/features'
import { useAppSelector } from '~/shared/store'
import { getCurrenciesState } from '~/shared/store/currencies'

export const CurrenciesRateWidget = () => {
  const [fromCurrency, setFromCurrency] = useState('AUD')
  const [toCurrency, setToCurrency] = useState('USD')

  const [inputPrice, setInputPrice] = useState(100)

  const { currencies } = useAppSelector(getCurrenciesState)

  const getResult = (value: number) => {
    if (currencies) {
      const fromPrice = fromCurrency !== 'RUB' ? currencies[fromCurrency]?.HistoryRate[0].value : 1
      const toPrice = toCurrency !== 'RUB' ? currencies[toCurrency]?.HistoryRate[0].value : 1

      const price = value / toPrice
      const result = price * fromPrice

      return result
    }
  }

  const convertationResult = getResult(inputPrice)

  return (
    <>
      <CurrencyInputFeature />
      <CurrencySelectFeature />

      <h1 style={{ border: '1px dashed #000', backgroundColor: '#ccc' }}>
        {inputPrice} {fromCurrency} = {convertationResult} {toCurrency}
      </h1>
    </>
  )
}
