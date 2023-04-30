import { FC } from 'react'
import { SelectComponent } from '~/entities/components/SelectComponent'

import { useAppSelector } from '~/shared/store'
import { getCurrenciesState } from '~/shared/store/currencies'

interface CurrencySelectFeatureProps {
  onChange: (name: string, value: string) => void
  name: string
  value: string
}

export const CurrencySelectFeature: FC<CurrencySelectFeatureProps> = ({ value, name, onChange }) => {
  const { currencies } = useAppSelector(getCurrenciesState)

  const handleSelectChange = (value: string) => {
    onChange(name, value)
    //currencies && console.log(currencies[`${value}`].CharCode)
    // Object.keys(currencies).length && setUnicode(Unicodes[currencies[`${value}`].CharCode])
  }

  return (
    <>
      {Boolean(Object.keys(currencies).length) && (
        <SelectComponent onChange={handleSelectChange} data={currencies} value={value} />
      )}
    </>
  )
}
