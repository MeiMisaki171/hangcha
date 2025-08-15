import logoImg from '~/assets/logo.svg'
import Navbar from './navbar'
import Language from './language'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full min-h-[133px] z-[222] bg-[var(--header-bg-color)] transition-all duration-200 ease-in-out'>
      <div className=' justify-between flex flex-wrap w-[1285px] mx-auto'>
        <a href='/' className='pt-4 pb-[17px] px-0'>
          <img src={logoImg} alt='logo' className='h-[97px] w-auto block outline-none' />
        </a>

        <Navbar />
        <Language />
      </div>
    </header>
  )
}

export default Header
