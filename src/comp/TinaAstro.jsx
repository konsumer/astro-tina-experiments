import { TinaAdmin } from 'tinacms'
import TinaProvider from '.tina/components/TinaProvider'
import { TinaEditProvider } from 'tinacms/dist/edit-state'

export default (props) => {
  return (
    <TinaEditProvider>
      <TinaAdmin />
    </TinaEditProvider>
  )
}
