import { Space } from 'antd'
import { FC } from 'react'
import { SelectItemWithIconProps } from '../SelectRow'

export const SelectItemWithIcon: FC<SelectItemWithIconProps> = ({ country }) => {
  return (
    <div style={{ flex: '0 0 30%' }}>
      <Space align='center'>
        <div style={{ lineHeight: 0 }}>
          <img src={country.flag} alt='' width='30px' />
        </div>
        <div>{country.label}</div>
      </Space>
    </div>
  )
}
