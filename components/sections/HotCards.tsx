import React from 'react'
import TrendingCard from '../component/TrendingCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import News from '../component/TrendingSlider/News'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

type Props = {}

const HotCards = (props: Props) => {
    return (
        <div className=" max_md:grid max_md:grid-cols-2 lg:flex gap-[10px] mt-[25px] px-[25px] ">
            <TrendingCard name="Trending News" />
            <TrendingCard name="Trending News" />
            <Swiper
                className="w-[460px]"
                slidesPerView={1}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    {' '}
                    <News />
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <News />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HotCards
