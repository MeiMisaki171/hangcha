import { Outlet } from 'react-router-dom'
import Header from './components/header'
import FixRight from './components/fix-right'
import Footer from './components/footer'

export default function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 '>
      <Header />
      <main className='flex-1 mt-[133px] '>
        <Outlet />
      </main>
      <FixRight />
      <Footer />
    </div>
  )
}
