import React from 'react'

type Props = { tokenname: string }

const TMarketCap = (props: Props) => {
    return (
        <div className="flex flex-col lg:flex-row gap-[25px] bg-slate-100 py-[22px] px-[25px] ">
            <div>
                <div className="text-2xl font-bold">
                    Total {props.tokenname} By Market Capitalization{' '}
                </div>
                <div className="text-sm text-slate-500 font-semibold">
                    This page lists the most valuable {props.tokenname} based
                    coins and tokens. These projects are listed by market
                    capitalization with the largest first and then descending in
                    order.
                </div>
                <div></div>
            </div>
            <div className="flex gap-[25px] flex-col sm:flex-row ">
                <MarketGraph
                    marketCap="103,345,453,344"
                    growth="up"
                    gpercent="2"
                />{' '}
                <MarketGraph
                    marketCap="103,345,453,344"
                    growth="up"
                    gpercent="2"
                />
            </div>
        </div>
    )
}

export default TMarketCap

const MarketGraph = (props: any) => {
    return (
        <div className="w-[360px] h-[90px] px-[22px] flex gap-[10px] items-center rounded-md  bg-white ">
            <div>
                <p className="text-xs text-slate-500 font-bold ">Market Cap</p>
                <p className="text-base whitespace-nowrap font-semibold ">
                    $ {props.marketCap}
                </p>
                <p
                    className={`px-[10px] text-sm ${
                        props.growth == 'up' ? 'text-green-500' : 'text-red-500'
                    } `}
                >
                    {props.gpercent}%{' '}
                </p>
            </div>
            <img
                className="w-[147px]"
                src="https://s3.coinmarketcap.com/generated/sparklines/sector/marketcap/web/7d/601cf8d2d8fd860e4ea5d96f.svg"
            />
        </div>
    )
}
