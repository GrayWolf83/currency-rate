import { ChangeEvent, FC } from 'react'
import { Select } from 'antd'
import { Valute } from '~/shared/models'
import { ValuteProps } from '~/shared/models/Valute'

interface ISelectProps {
  data: Valute
}

export const SelectComponent: FC<ISelectProps> = ({ data }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event)
  }

  const values: ValuteProps[] = Object.values(data)

  return (
    <Select
      onChange={handleChange}
      showSearch
      style={{ width: 300 }}
      placeholder="Select currency"
      optionFilterProp="children"
    >
      {values.map((value) => (
        <Select.Option key={value.ID} value={value.Value}>
          <img
            style={{ width: '20px', marginRight: '10px' }}
            alt={value.Name}
            src={`flags/${value.CharCode}.png`}
          />
          {value.CharCode} - {value.Name}
        </Select.Option>
      ))}
    </Select>
  )
}
