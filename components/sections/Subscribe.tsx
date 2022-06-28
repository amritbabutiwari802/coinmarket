import React from 'react'

type Props = {}

const Subscribe = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row md:gap:55px md:mb-[70px] bg-subscribebg ">
            <div className="flex-1 px-[25px] ">
                <span className="text-[22px] md:text-[34px]  ">
                    Be the first to know about
                    <span className="font-bold  font-sans ">
                        {' '}
                        crypto news every day
                    </span>
                </span>
                <p className="text-ashgray my-[25px]">
                    Get crypto analysis, news and updates risght to your inbox!
                    Sign up here so you don't miss a single newsletter.
                </p>
                <div>
                    <button className="px-[10px] bg-buttonblue hover:buttonbluehover w-[100%] md:w-[148px] mb-[25px] h-[48px] rounded-md font-bold text-[#FFFFFF] ">
                        Subscribe
                    </button>
                </div>
            </div>

            <img src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=224f5ba w-[100%]  md:w-[572px]  " />
        </div>
    )
}

export default Subscribe
