import { useState } from 'react'
import { Row } from 'antd'
import { MyButton, MyInput, MySelect } from './UI'

const usdFlag = 'https://cdn.icon-icons.com/icons2/230/PNG/256/UnitedStates_US_USA_840_Flag1_26093.png'
const chyFlag = 'https://img.icons8.com/?size=512&id=17962&format=png'
const rusFlag = 'https://img.icons8.com/?size=512&id=15528&format=png'

const currency = [
  { label: 'USD - US Dollar', value: 'USD', flag: usdFlag, prefix: '$' },
  { label: 'CHY - CH Yuan', value: 'CHY', flag: chyFlag, prefix: '¥' },
  { label: 'RUB - Russian Ruble', value: 'RUB', flag: rusFlag, prefix: '₽' },
]

export interface ICurrency {
  label: string
  value: string
  flag: string
}

export interface SelectItemWithIconProps {
  country: ICurrency
}

export const SelectRow = () => {
  const [valueInput, setValueInput] = useState('1.00')
  const [valueFrom, setValueFrom] = useState('RUB')
  const [valueTo, setValueTo] = useState('USD')
  const [currentInputPrefix, setCurrentInputPrefix] = useState('₽')

  const handleButton = () => {
    setValueFrom(valueTo)
    setValueTo(valueFrom)
  }

  return (
    <div style={{ maxWidth: '75rem', margin: '0 auto', padding: '0 15px' }}>
      <Row align='bottom' justify='space-between' wrap>
        <MyInput value={valueInput} prefix={currentInputPrefix} onChange={setValueInput} title='Amount' />
        <MySelect value={valueFrom} currency={currency} onChange={setValueFrom} title='From' />
        <MyButton onClick={handleButton} />
        <MySelect value={valueTo} currency={currency} onChange={setValueTo} title='To' />
      </Row>
    </div>
  )
}
