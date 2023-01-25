import { RegistroModel } from "@/models/registro_model";
import { createContext, useState } from "react";

export const DetailContext = createContext({})

export const DetailProvider = ({ children }: any) => {
  const [detalleRegistro, setDetalleRegistro] = useState<RegistroModel>()

  return (
    <DetailContext.Provider value={{
      detalleRegistro, 
      setDetalleRegistro,
    }}>
      {children}
    </DetailContext.Provider>
  )
}