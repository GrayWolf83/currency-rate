import { Button } from 'antd'
import { FC } from 'react'
import { SwapOutlined } from '@ant-design/icons'

export interface IMyButton {
	onClick: () => void
}

export const MyButton: FC<IMyButton> = ({ onClick }) => {
	return (
		<Button
			shape='circle'
			icon={<SwapOutlined />}
			size='large'
			onClick={onClick}
		/>
	)
}
