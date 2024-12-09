import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext)
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>
}
