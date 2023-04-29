import { Select } from 'antd'
import { FC } from 'react'
import { ICurrency } from '../SelectRow'
import { SelectItemWithIcon } from './SelectItemWithIcon'

export interface IMySelectProps {
  title: string
  value: string
  onChange: (value: string) => void
  currency: ICurrency[]
}

export const MySelect: FC<IMySelectProps> = ({ title, value, onChange, currency }) => {
  return (
    <div style={{ flex: '0 0 30%', margin: '0 5px' }}>
      <h4 style={{ margin: '0.3rem 0.7rem' }}>{title}</h4>
      <Select
        size='large'
        value={value}
        style={{ width: '100%' }}
        onChange={onChange}
        options={currency.map((country) => ({
          value: country.value,
          label: <SelectItemWithIcon key={country.label} country={country} />,
        }))}
      />
    </div>
  )
}
