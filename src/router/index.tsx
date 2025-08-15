import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Home from '~/screens/Home'

import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout chính
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )
      }
      // {
      //   path: 'login',
      //   element: <Login />
      // }
    ]
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
