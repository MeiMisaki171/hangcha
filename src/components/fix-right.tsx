import { BiSolidMessageRounded } from 'react-icons/bi'
import { GiNotebook } from 'react-icons/gi'
import { IoIosArrowUp } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'

export default function FloatingButtons() {
  return (
    <div className='fixed right-0 bottom-[100px] z-[999] flex flex-col items-center'>
      <button className='w-14 h-14 flex items-center justify-center m-[2px] bg-[rgb(34,34,172)] text-white cursor-pointer hover:opacity-80'>
        <GiNotebook size={30} />
      </button>
      <button className='w-14 h-14 flex items-center justify-center m-[2px] bg-[rgb(34,34,172)] text-white cursor-pointer hover:opacity-80'>
        <BiSolidMessageRounded size={40} />
      </button>
      <button className='w-14 h-14 flex items-center justify-center m-[2px] bg-[rgb(34,34,172)] text-white cursor-pointer hover:opacity-80'>
        <TfiEmail size={30} />
      </button>
      <button
        className='w-14 h-14 flex items-center justify-center m-[2px] bg-[rgb(34,34,172)] cursor-pointer text-white hover:opacity-80'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IoIosArrowUp size={30} />
      </button>
    </div>
  )
}
