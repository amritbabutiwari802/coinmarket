import Image from 'next/image'
import React from 'react'

type Props = {
    name: string
}

const TrendingCard = (props: Props) => {
    return (
        <div className="flex-1 shadow-sm border-solid border border-slate-200 px-[16px] rounded-md py-[25px] ">
            <div className="flex justify-between">
                <div className="flex gap-[16px]">
                    {' '}
                    <img
                        src={
                            'https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=224f5ba'
                        }
                        className="w-[20px] h-[20px]"
                    />{' '}
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <button className="text-xs font-bold text-blue-500 ">
                    {' '}
                    More {'>'}{' '}
                </button>{' '}
            </div>

            {data.map((value: any, index: number) => {
                return (
                    <div className="flex justify-between mt-[16px] pl-[10px] ">
                        <div className="flex gap-[14px] items-center  ">
                            <p className="text-ashgray text-sm self-center">
                                {index + 1}
                            </p>

                            <img
                                src={value.src}
                                width="25px"
                                height="25px"
                                className="w-[16px] h-[16px]"
                            />
                            <p className="text-[12px] font-bold">
                                {value.name}
                            </p>
                            <p className="text-[12px] text-ashgray ">
                                {value.scrip}
                            </p>
                        </div>

                        <div className="flex gap-[7px]  ">
                            {value.indicator == 0 ? (
                                <></>
                            ) : value.indicator == 1 ? (
                                <Chup />
                            ) : (
                                <Chdown />
                            )}{' '}
                            <p
                                className={`text-xs font-bold text-${value.color}`}
                            >
                                {value.growth}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendingCard

const data = [
    {
        src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png',
        name: 'Terra Classic',
        scrip: 'LOMG',
        indicator: 2,
        growth: '10.3%',
        color: 'red-500',
    },
    {
        src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png',
        name: 'Tersd hfassic',
        scrip: 'LLOG',
        indicator: 2,
        growth: '10.3%',
        color: 'green-500',
    },
    {
        src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png',
        name: 'Lskjda Essic',
        scrip: 'MKST',
        indicator: 2,
        growth: '10.3%',
        color: 'red-500',
    },
]

const Chdown = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" h-[15px] w-[12px] "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
)

const Chup = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" h-[15px] w-[12px] "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
)
