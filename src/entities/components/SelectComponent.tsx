import { FC } from 'react'
import { Select } from 'antd'
import { Currency, CurrencyProps } from '~/shared/models'
import { Unicodes } from '~/shared/initialData'

interface ISelectProps {
  data: Currency
  onChange: (value: string) => void
  value: string
}

export const SelectComponent: FC<ISelectProps> = ({ data, onChange, value }) => {
  const handleChange = (value: string) => {
    onChange(value)
  }

  const values: CurrencyProps[] = Object.values(data)

  return (
    <>
      <Select
        onChange={handleChange}
        showSearch
        style={{ width: 400 }}
        placeholder='Select currency'
        value={value}
        defaultValue={values[0].CharCode}
        optionFilterProp='children'
      >
        {values.map((value) => (
          <Select.Option key={value.CharCode} value={value.CharCode}>
            <img
              style={{ width: '20px', marginRight: '10px' }}
              alt={value.Name}
              src={`flags/${value.CharCode}.png` || ''}
            />
            {value.CharCode} - {value.Name}
            <span style={{ marginLeft: '10px' }}>({Unicodes[value.CharCode]})</span>
          </Select.Option>
        ))}
      </Select>
    </>
  )
}
