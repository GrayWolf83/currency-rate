import { Button } from 'antd'
import { useState } from 'react'
import { SwapOutlined } from '@ant-design/icons'

export interface IProps {
	onClick: () => void
}

export const ChangeCurrenciesFeature = ({ onClick }: IProps) => {
	const [newStyle, setNewStyle] = useState(false)

	const handleClick = () => {
		onClick()
		setNewStyle((prev) => !prev)
	}

	return (
		<Button
			style={{ transform: newStyle ? 'rotate(180deg)' : 'rotate(0deg)' }}
			shape='circle'
			icon={<SwapOutlined />}
			size='middle'
			onClick={handleClick}
		/>
	)
}
