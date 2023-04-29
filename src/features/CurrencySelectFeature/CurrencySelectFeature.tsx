import { SelectComponent } from '~/entities/components/SelectComponent'

import { useAppSelector } from '~/shared/store'
import { getCurrenciesState } from '~/shared/store/currencies'

export const CurrencySelectFeature = () => {
  const { currencies } = useAppSelector(getCurrenciesState)

  const handleSelectChange = (value: string) => {
    //currencies && console.log(currencies[`${value}`].CharCode)
    // Object.keys(currencies).length && setUnicode(Unicodes[currencies[`${value}`].CharCode])
  }

  return (
    <>
      {Boolean(Object.keys(currencies).length) && (
        <>
          <SelectComponent onChange={handleSelectChange} data={currencies} />
        </>
      )}
    </>
  )
}
