import { Typography } from 'antd'
import { SelectComponent } from '~/components/SelectComponent'
import { initialData } from '~/shared/initialData'
import { SelectRow } from '~/components'


export const Home = () => {
  return (
    <>
      <Typography.Title>Home page</Typography.Title>
      <SelectComponent data={initialData.Valute} />
      <SelectRow />
    </>
  )
}
