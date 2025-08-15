import { GoArrowRight } from 'react-icons/go'
import { menuItems } from '~/data/menuItems'

const FooterBottom = () => {
  return (
    <div className='bg-black'>
      <div className='justify-between flex flex-wrap w-[1285px] mx-auto pt-[78px] border-b border-white'>
        <div className='text-white flex flex-row'>
          <dl className='w-[234px]'>
            <dt className='mb-[26px]'>
              <a href='/' className='text-[21px] leading-[0.8em] font-[600]'>
                {menuItems[0].title}
              </a>
            </dt>
            {menuItems[0].children.map((item) => {
              return (
                <dd key={item}>
                  <a href='/' className='relative group text-white'>
                    {item}
                    <span className='absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </dd>
              )
            })}
          </dl>
          <dl className='w-[234px]'>
            <dt className='mb-[26px]'>
              <a href='/' className='text-[21px] leading-[0.8em] font-[600]'>
                {menuItems[1].title}{' '}
              </a>
            </dt>
            {menuItems[1].children.map((item) => {
              return (
                <dd key={item}>
                  <a href='/' className='relative group text-white'>
                    {item}
                    <span className='absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </dd>
              )
            })}
          </dl>
          <dl className='w-[234px]'>
            <dt className='mb-[26px]'>
              <a href='/' className='text-[21px] leading-[0.8em] font-[600]'>
                {menuItems[4].title}
              </a>
            </dt>
            {menuItems[4].children.map((item) => {
              return (
                <dd key={item}>
                  <a href='/' className='relative group text-white'>
                    {item}
                    <span className='absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </dd>
              )
            })}
            <dt className='mb-[26px] mt-[45px]'>
              <a href='/' className='text-[21px] leading-[0.8em] font-[600]'>
                Hangcha Talk
              </a>
            </dt>
          </dl>
          <dl className='w-[234px]'>
            <dt className='mb-[26px]'>
              <a href='/' className='text-[21px] leading-[0.8em] font-[600]'>
                {menuItems[3].title}
              </a>
            </dt>
            {menuItems[3].children.map((item) => {
              return (
                <dd key={item}>
                  <a href='/' className='relative group text-white'>
                    {item}
                    <span className='absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </dd>
              )
            })}
            <dt className='mb-[26px] mt-[45px]'>
              <a href='/' className='text-[21px] leading-[0.8em] font-[600]'>
                {menuItems[2].title}
              </a>
            </dt>
            {menuItems[2].children.map((item) => {
              return (
                <dd key={item}>
                  <a href='/' className='relative group text-white'>
                    {item}
                    <span className='absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </dd>
              )
            })}
          </dl>
          <div>
            <h6 className='text-[21px] mb-[32px] leading-[1em] font-[600]'>Subscribe to Hangcha's newsletter</h6>
            <form action='submit' className='flex w-[300px] h-[40px] mb-2'>
              <input className='input-box flex-1' type='text' id='text' name='email' placeholder='Your email' />
              <button className='arrow-btn' onClick={() => {}} name='button'>
                <GoArrowRight size={25} />
              </button>
            </form>
            <p className='sum bnp-smiddle'>
              Hangcha needs the contact information you provide <br />
              to us to contact you about our products and services.
            </p>
            <a className='text-[16px] leading-[22px]' href='tel:840399072766'>
              Tel: +84 0399072766
            </a>
            <br />
            <a className='text-[16px] leading-[22px]' href='mailto:alan.wu@hcforklift.com'>
              alan.wu@hcforklift.com
            </a>
            <div className='flex items-center pt-[47px] pb-[28px]'>
              <p>Let's Connect!</p>
              <div className='ms-[10px] flex'>
                <a
                  className='w-[26px] h-[26px] ml-[14px]'
                  href='https://www.youtube.com/c/HangchaForklift/videos'
                  target='_blank'
                ></a>
                <a
                  className='w-[26px] h-[26px] ml-[14px]'
                  href='https://www.facebook.com/HangchaExport'
                  target='_blank'
                ></a>
                <a
                  className='w-[26px] h-[26px] ml-[14px]'
                  href='https://www.instagram.com/hangcha_forklift/'
                  target='_blank'
                ></a>
                <a className='w-[26px] h-[26px] ml-[14px]' href='https://twitter.com/Hangcha_HC' target='_blank'></a>
                <a
                  className='w-[26px] h-[26px] ml-[14px]'
                  href='https://www.linkedin.com/company/zhejiang-hangcha-imp.-&amp;exp.-co.-ltd./'
                  target='_blank'
                >
                  <img
                    src='https://vnhcforklift.vhost2.lanyun2009.com/static/img/ins.png'
                    width='26px'
                    height='26px'
                    style={{ borderRadius: '5px' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex flex-wrap w-[1285px] mx-auto pt-[78px] border-b border-white'>
        <p className='text-[13px] leading-[0.8em] tracking-[1px] text-[#ccc] pt-[12px] pb-[27px] flex justify-between w-full'>
          <span>Copyright © Hangcha Vietnam 2025.</span>
          <a href=''>PRIVACY POLICY AND TERMS OF USE</a>
        </p>
      </div>
    </div>
  )
}

export default FooterBottom
