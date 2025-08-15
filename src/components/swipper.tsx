import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import img1 from '~/assets/image/X STACKER.jpg'
import img2 from '~/assets/image/X PALLET TRUCK.jpg'

import { Navigation, Autoplay } from 'swiper/modules'

export default function MySwiper() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      loop={true}
      effect='fade'
      speed={1} // tránh lỗi loop khi để 0
      className='mySwiper'
    >
      <SwiperSlide>
        <img src={img1} alt='img1' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt='img2' />
      </SwiperSlide>
    </Swiper>
  )
}
