import { Navigate } from 'react-router-dom'
import type { JSX } from 'react'
// import { useAppStore } from '~/store'

interface ProtectedRouteProps {
  children: JSX.Element
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = true
  // useAppStore((state) => state.token)
  if (!token) {
    return <Navigate to='/login' replace />
  }
  return children
}
