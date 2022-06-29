import React from 'react'
import TrendingCard from '../compo/TrendingCard'

type Props = {}

const HotCards = (props: Props) => {
    return (
        <div className="flex gap-[10px] mt-[25px] px-[25px] ">
            <TrendingCard name="Trending News" />
            <TrendingCard name="Trending News" />
            <TrendingCard name="Trending News" />
        </div>
    )
}

export default HotCards
