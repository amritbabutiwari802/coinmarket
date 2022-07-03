import React from 'react'
import ChevaronUp, { Star } from './Icons'

type Props = {}

const Table_one = (props: Props) => {
    return (
        <div className="px-[25px] mt-[10px] overflow-x-scroll  ">
            <table className="w-[100%] text-right  whitespace-nowrap ">
                <thead className="text-sm h-[47px] font-bold border-solid border-y-[1px] border-slate-200">
                    <tr className="relative">
                        {' '}
                        <th className="w-[31px] px-[10px]  "></th>
                        <th className="flex justify-end px-[10px] relative w-[51px] h-[47px] flex items-center">
                            # <ChevaronUp className="w-[19px] h-[19px]" />
                        </th>
                        <th className="text-left px-[10px] md:w-[216px] relative ">
                            Name
                        </th>
                        <th className="md:w-[89px] px-[10px] relative ">
                            Price
                        </th>
                        <th className="md:w-[85px] px-[10px] relative ">
                            24h%
                        </th>
                        <th className="md:w-[84px] px-[10px] relative ">7h%</th>
                        <th className="md:w-[157px] px-[10px] relative ">
                            Market Cap
                        </th>
                        <th className="md:w-[154px] px-[10px] relative ">
                            Volume [24h]
                        </th>
                        <th className="md:w-[229px] px-[10px] relative ">
                            Circulating Supply
                        </th>
                        <th className="w-[184px] px-[10px] relative ">
                            Last 7 Days
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value: any, index: number) => (
                        <tr
                            key={value.name.src + index}
                            className="text-sm font-bold h-[79px] px-[10px] border-solid border-b-[1px] border-slate-200 relative "
                        >
                            <td className=" ">
                                {' '}
                                <Star className="h-[20px] w-[12px] sticky z-[100] left-10 " />{' '}
                            </td>
                            <td className=" w-[51px] px-[10px]">
                                <div className="text-left w-[51px]  ">
                                    {value.id}
                                </div>
                            </td>
                            <td className="flex gap-[7px] h-[79px] px-[10px]">
                                <img
                                    src={value.name.src}
                                    className="w-[24px]  h-[24px] self-center"
                                />
                                <p className="text-sm font-bold self-center px-[10px]">
                                    {value.name.value}
                                </p>
                                <p className="text-sm font-bold text-slate-400 self-center px-[10px]">
                                    {value.name.scrip}
                                </p>
                            </td>
                            <td className="px-[10px]">{value.price}</td>
                            <td
                                className={`px-[10px] ${
                                    value.h_24.growth == 'up'
                                        ? 'text-green-500'
                                        : 'text-red-500'
                                } `}
                            >
                                {value.h_24.value}
                            </td>
                            <td
                                className={`px-[10px] ${
                                    value.d_7.growth == 'up'
                                        ? 'text-green-500'
                                        : 'text-red-500'
                                } `}
                            >
                                {value.d_7.value}
                            </td>
                            <td className="px-[10px]">{value.marketCap}</td>
                            <td className="px-[10px]">{value.volume}</td>
                            <td className="px-[10px]">
                                {value.circulating_supply}
                            </td>
                            <td className="px-[10px]">
                                <img
                                    src={value.graph_src}
                                    className="w-[164px] h-[64px]"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table_one

const data = [
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'up' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
        id: '12',
        name: {
            src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
            value: 'Tether',
            scrip: 'USTD',
        },
        price: '$0.999',
        h_24: { value: '0.01%', growth: 'up' },
        d_7: { value: '0.21%', growth: 'down' },
        marketCap: '66,748,175,841',
        volume: '$43.91B',
        circulating_supply: '66,824,919,366 USDT',
        graph_src:
            'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
]
