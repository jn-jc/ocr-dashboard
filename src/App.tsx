import './assets/css/index.css'
import { LoginPage } from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DetalleClientePage from './pages/DetalleClientePage'
import { AdminClientesPage } from './pages/AdminClientesPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuthStore } from './store/auth'
import { HeaderNavbar } from './components/Header'


function App() {

  const isAuth = useAuthStore(state => state.isAuth)
  return (
    <BrowserRouter>
      {isAuth ? <HeaderNavbar /> : null}
      <Routes>
        <Route path='/login' element={!isAuth ? <LoginPage /> : <Navigate to='/' />} />
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/gestion-clientes' element={<AdminClientesPage />} />
          <Route path='/detalle/:id_registro' element={<DetalleClientePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
