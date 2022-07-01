import React from 'react'
import TrendingCard from '../compo/TrendingCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import News from '../compo/TrendingSlider/News'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

type Props = {}

const HotCards = (props: Props) => {
    return (
        <div className="flex gap-[10px] mt-[25px] px-[25px] ">
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
