import { Button } from 'antd'
import { FC, useState } from 'react'
import { SwapOutlined } from '@ant-design/icons'

export interface IMyButton {
  onClick: () => void
}

export const MyButton: FC<IMyButton> = ({ onClick }) => {
  const [newStyle, setNewStyle] = useState(false)

  const handleClick = () => {
    onClick()
    setNewStyle((prev) => !prev)
  }

  return (
    <div>
      <Button
        style={{ transform: newStyle ? 'rotate(180deg)' : 'rotate(0deg)' }}
        shape='circle'
        icon={<SwapOutlined />}
        size='middle'
        onClick={handleClick}
      />
    </div>
  )
}
