import { Input } from 'antd'
import { FC } from 'react'

interface IMyInputProps {
  title: string
  value: string
  onChange: (value: string) => void
  prefix: string
}

export const MyInput: FC<IMyInputProps> = ({ title, value, onChange, prefix }) => {
  return (
    <div style={{ flex: '0 0 30%', margin: '0 5px' }}>
      <h4 style={{ margin: '0.3rem 0.7rem' }}>{title}</h4>
      <Input
        width='100%'
        placeholder='Введите сумму'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        size='large'
        prefix={prefix}
      />
    </div>
  )
}
