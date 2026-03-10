import React, { use, useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from './AuthProvider'

const PrivateRoute = ( {children} ) => {
    const { user } = use(AuthContext)
    if (user && user.email) {
        return children
    }
  return <Navigate to="/signin"></Navigate>
}

export default PrivateRoute