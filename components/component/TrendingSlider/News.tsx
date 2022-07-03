import Image from 'next/image'
import React from 'react'
import { Eye, Heart, StarFilled } from '../Icons'

type Props = {}

const News = (props: Props) => {
    return (
        <div className="p-[10px] shadow-md rounded-xl w-[416px] h-[182px] ">
            <div className="flex flex-1 justify-between px-[16px] ">
                <div className="flex">
                    {' '}
                    <StarFilled className="w-[28px] h-[28px] fill-[#ffc83d]" />
                    <span className="text-md font-bold">
                        Top Gravity Article
                    </span>{' '}
                </div>
                <button className="text-xs text-blue-500 font-bold ">
                    More {'>'}
                </button>
            </div>
            <div className="flex items-center gap-[25px] mt-[16px] ">
                <div className="w-[100px] h-[100px]">
                    <Image
                        width="100px"
                        height="100px"
                        src={data.mainImage}
                        className="rounded-lg"
                    />
                </div>

                <div>
                    <div className="w-[292px] flex">
                        <Image src={data.ipIcon} height="18px" width="18px" />{' '}
                        <p className="text-sm font-semibold ml-[4px]">
                            {data.heading}
                        </p>{' '}
                    </div>
                    <div className="w-[292px] max-h-[40px] overflow-hidden text-sm font-semibold mt-[10px]">
                        {data.hightlights}
                    </div>
                    <div className="flex mt-[10px] text-xs text-slate-500 font-bold ">
                        {data.time}{' '}
                        <Eye className="w-[19px] h-[19px] ml-[10px]  mr-[4px] " />{' '}
                        {data.views}{' '}
                        <Heart className="w-[19px] h-[19px] ml-[10px] fill-slate-400 mr-[4px] " />{' '}
                        {data.likes}{' '}
                        <div className="flex items-center ml-[10px] gap-[7px] bg-slate-200 px-[7px] py-[4px] rounded-md">
                            <Image
                                src={data.codeImage}
                                height="16px"
                                width="16px"
                            />{' '}
                            {data.code}{' '}
                        </div>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News

const data = {
    mainImage:
        'https://academy-public.coinmarketcap.com/srd-optimized-uploads/87eb1fc536f04169981f71961647f22c.png',
    ipIcon: 'https://s3.coinmarketcap.com/static/img/portraits/62bd691fc8261218d3899f79.png',
    heading: 'PlayDapp',
    hightlights:
        'CONSENSUS 2022 HIGHLIGHTS: PlayDapp Makes 3 Major Announcements at the World’s Largest Blockchain Conference',
    time: '12h',
    views: '0',
    likes: '3',
    code: 'PLA',
    codeImage: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7461.png',
}
