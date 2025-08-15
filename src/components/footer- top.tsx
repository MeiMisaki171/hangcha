import { useState } from 'react'
import foottb1 from '~/assets/icons/foottb1.png'
import foottb11 from '~/assets/icons/foottb1-1.png'
import foottb2 from '~/assets/icons/foottb2.png'
import foottb21 from '~/assets/icons/foottb2-1.png'
import foottb3 from '~/assets/icons/foottb3.png'
import foottb31 from '~/assets/icons/foottb3-1.png'

const FooterTop = () => {
  const [src1, setSrc1] = useState(foottb1)
  const [src2, setSrc2] = useState(foottb2)
  const [src3, setSrc3] = useState(foottb3)
  return (
    <div className='bg-gray-100 justify-between flex flex-wrap w-[1285px] mx-auto h-[110px]'>
      <button
        className='flex-1 flex items-center justify-center cursor-pointer hover:text-[var(--color-primary)]'
        onMouseEnter={() => setSrc1(foottb11)}
        onMouseLeave={() => setSrc1(foottb1)}
      >
        <img src={src1} alt='foottb1' />
        <p className='ml-[18px] text-[25px]  font-semibold'>Choose Your Forklift</p>
      </button>
      <button
        className='flex-1 flex items-center justify-center cursor-pointer hover:text-[var(--color-primary)]'
        onMouseEnter={() => setSrc2(foottb21)}
        onMouseLeave={() => setSrc2(foottb2)}
      >
        <img src={src2} alt='foottb1' />
        <p className='ml-[18px] text-[25px]  font-semibold '>Service</p>
      </button>
      <button
        className='flex-1 flex items-center justify-center cursor-pointer hover:text-[var(--color-primary)]'
        onMouseEnter={() => setSrc3(foottb31)}
        onMouseLeave={() => setSrc3(foottb3)}
      >
        <img src={src3} alt='foottb1' />
        <p className='ml-[18px] text-[25px]  font-semibold '>Contact Us</p>
      </button>
    </div>
  )
}

export default FooterTop
