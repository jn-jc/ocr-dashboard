import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/gestion-clientes'>Gestion Clientes</Link>
        </li>
      </ul>
    </nav>
  )
}
