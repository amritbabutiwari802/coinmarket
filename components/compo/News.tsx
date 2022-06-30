import React from 'react'

type Props = {}

const News = (props: Props) => {
    return (
        <div>
            <div className="flex justify-between px-[25px] ">
                <h1 className="text-[25px] font-bold ">
                    Today's Cryptocurrency Prices by Market Cap
                </h1>
                <div className="text-ashgray hidden md:inline">Highlights </div>
            </div>
            <p className="text-ashgray px-[25px] text-sm font-semibold ">
                The global crypto market cap is $902.50B, a{' '}
                <span className="text-red-500"> 3.60%</span> decrease over the
                last day.{' '}
                <span className="underline underline-offset-4"> Read More</span>
            </p>
        </div>
    )
}

export default News
