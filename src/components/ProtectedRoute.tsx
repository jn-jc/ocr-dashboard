import { PropsModel } from "@/models/props_model"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ children, isAllowed }: PropsModel) => {
  if (!isAllowed) return <Navigate to='/login' />
  return children ? <>children</> : <Outlet/>
}