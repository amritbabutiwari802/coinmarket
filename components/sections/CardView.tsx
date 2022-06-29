import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper'

type Props = {}

const CardView = (props: Props) => {
    return (
        <div className="px-[10px] mb-[25px] mt-[25px] ">
            <Swiper
                spaceBetween={0}
                slidesPerView={4}
                navigation={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation]}
                className="mySwiper "
                grabCursor={true}
            >
                {data.map((value: any, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <Cardx datax={value} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default CardView

const Cardx = (props: any) => {
    return (
        <div className="w-[288px]">
            <img
                src={props.datax.img}
                className="w-[280px] h-[136px] rounded-md "
            />
            <p className="text-xs font-semibold text-ashgray mt-[16px] ">
                {props.datax.text1}
            </p>
            <p className="text-[14px] font-semibold mt-[4px] ">
                {props.datax.text2}
            </p>
        </div>
    )
}

const data = [
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656301175336_Everscale-Gravity-Spotlight-280x136%20(1).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
        slidesToSlide: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4,
        slidesToSlide: 3,
    },
}
