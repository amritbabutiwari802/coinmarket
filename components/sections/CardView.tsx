import React, { useEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper'
import { ArrowLeft, ArrowRight } from '../compo/Icons'

type Props = {}

const CardView = (props: Props) => {
    const cardRef = React.useRef<any>(Cardx)
    const [leftScroll, setLeftScroll] = React.useState(false)
    const [rightScroll, setRightScroll] = React.useState(true)

    useEffect(() => {
        if (cardRef.current.scrollLeft > 0) {
            setLeftScroll(true)
        }
    }, [cardRef?.current?.scrollLeft])

    return (
        <div className="relative">
            <div
                ref={cardRef}
                onScroll={() => {
                    if (cardRef.current.scrollLeft == 0) {
                        setLeftScroll(false)
                    } else {
                        setLeftScroll(true)
                    }
                    console.log(cardRef.current.scrollWidth)
                    console.log(cardRef.current.scrollLeft)
                    if (
                        cardRef.current.scrollWidth ==
                        cardRef.current.scrollLeft + cardRef.current.clientWidth
                    ) {
                        setRightScroll(false)
                    } else {
                        setRightScroll(true)
                    }
                }}
                className="relative w-[100%] px-[10px] mb-[25px] mt-[25px] flex gap-[10px] scroll-smooth overflow-x-scroll  novscroll"
            >
                {data.map((value: any, index: number) => {
                    return <Cardx datax={value} />
                })}
            </div>

            {leftScroll && (
                <div className="absolute top-[0px] left-[0px] h-[100%] w-[100px] flex pl-[25px] items-center z-[100] bg-gradient-to-r from-whitegd1 to-whitegd0  ">
                    <button
                        className="z-200"
                        onClick={() => {
                            cardRef.current.scrollLeft -= 500
                        }}
                    >
                        <ArrowLeft className="w-[24px] h-[24px] fill-slate-700" />
                    </button>
                </div>
            )}
            {rightScroll && (
                <div className="absolute top-[0px] right-[0px] h-[100%] w-[100px] flex justify-end pr-[25px] items-center z-[100] bg-gradient-to-l from-whitegd1 to-whitegd0 ">
                    <button
                        onClick={() => {
                            cardRef.current.scrollLeft += 500
                        }}
                    >
                        <ArrowRight className="w-[24px] h-[24px] fill-slate-700" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default CardView

const Cardx = (props: any) => {
    return (
        <div className="w-[288px] whitespace-nowrap min-w-[288px]">
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
        img: 'https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1647313709257_Webp.net-compress-image%20(4).jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1656483846886_Klaytn-Spotlight-280x136.jpg',
        text1: 'Crypto Deep Drive',
        text2: 'What is Crypto Lending',
    },
    {
        img: 'https://s2.coinmarketcap.com/static/new-alerts/613f25cbef9a5a001905f323/img/1656522720277_Bitcoin-Legal-Tender-Thumbnail_280x136.jpg',
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
