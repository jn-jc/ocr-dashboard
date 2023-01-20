import {useParams} from 'react-router-dom'

function DetalleClientePage() {

  const params = useParams()

  return (
    <div>
      Registro # <h2>{params.id_registro}</h2>
    </div>
  )
}

export default DetalleClientePage