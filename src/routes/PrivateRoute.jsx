import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute() {
  return <Navigate to={'/login'}></Navigate>
}
