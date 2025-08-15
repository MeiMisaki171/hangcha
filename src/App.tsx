// src/App.tsx
import { Outlet } from 'react-router-dom'
import Header from './components/header'

export default function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <main className='p-4'>
        <Outlet /> {/* Router sẽ render component ở đây */}
      </main>
      <footer className='p-4 bg-gray-200'>My App Footer</footer>
    </div>
  )
}
