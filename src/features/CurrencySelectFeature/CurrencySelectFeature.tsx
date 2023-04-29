import { useState } from 'react'
import { SelectComponent } from '~/entities/components/SelectComponent'
import { Unicodes } from '~/shared/initialData'
import { Currency } from '~/shared/models'
import { useAppSelector } from '~/shared/store'
import { getCurrenciesState } from '~/shared/store/currencies'

export const CurrencySelectFeature = () => {
  const { currencies } = useAppSelector(getCurrenciesState)
  const [unicode, setUnicode] = useState<string>('')

  const handleSelectChange = (value: string) => {
    //currencies && console.log(currencies[`${value}`].CharCode)
    // Object.keys(currencies).length && setUnicode(Unicodes[currencies[`${value}`].CharCode])
    console.log(unicode)
  }

  return (
    <>
      {Boolean(Object.keys(currencies).length) && (
        <SelectComponent onChange={handleSelectChange} data={currencies} />
      )}
      
    </>
  )
}
