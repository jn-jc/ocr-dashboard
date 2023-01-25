import { useParams } from 'react-router-dom'
import { DetalleRegistro } from '@/components/DetalleRegistro'


import { DetailProvider } from '@/context/DetailContext'

function DetalleClientePage() {

  const params = useParams()

  return (
    <div>
      <DetailProvider>
        <DetalleRegistro id={params.id_registro} />
      </DetailProvider>
    </div>
  )
}

export default DetalleClientePage