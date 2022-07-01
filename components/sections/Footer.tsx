import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className=" px-[4%] mt-[100px]  ">
            <div className="flex flex-col lg:flex-row lg:justify-between w-[100%]">
                <div>
                    <img
                        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=224f5ba"
                        className="w-[239px] h-[32px]"
                    />
                </div>
                <div className="grid  grid-cols-2 md:grid-cols-4 gap-x-[25px]">
                    <FooterItem data={data.product} />
                    <FooterItem data={data.company} />
                    <FooterItem data={data.support} />
                    <FooterItem data={data.social} />
                </div>
            </div>

            <div className="mt-[100px] text-ashgray text-[15px] font-semibold flex flex-col gap-[25px] md:flex-row md:justify-between">
                <div>© 2022 CoinMarketCap. All rights reserved</div>

                <div className="flex gap-[4px]">
                    <div>
                        <img
                            src="https://s2.coinmarketcap.com/static/cloud/img/app_store_badge_black_1.svg?_=224f5ba"
                            className="w-[120px] h-[36px]"
                        />
                    </div>

                    <div>
                        <img
                            src="https://s2.coinmarketcap.com/static/cloud/img/app_store_badge_black_1.svg?_=224f5ba"
                            className="w-[120px] h-[36px]"
                        />
                    </div>
                    <img
                        src="https://s2.coinmarketcap.com/static/cloud/img/qr-code-button.svg?_=224f5ba"
                        className="w-[36px] h-[36px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer

const FooterItem = (props: any) => {
    return (
        <div className="mt-[55px] lg:mt-[0px] ">
            <span className="font-bold text-[17px]">{props.data.heading}</span>
            <ul className=" flex flex-col ">
                {props.data.items.map((value: any, index: number) => (
                    <li key={value + index} className="mt-[10px]">
                        <a className="text-ashgray text-[15px] font-semibold font-sans hover:text-linkblue cursor-pointer ">
                            {value}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const data = {
    product: {
        heading: 'Products',
        items: [
            'BlockChain Developer',
            'Crypto',
            'Some Api',
            'Good man',
            'So many',
        ],
    },

    company: {
        heading: 'Company',
        items: [
            'ok',
            'wonderful thing',
            'BlockChain Developer',
            'High Ranking',
            'Some Fine',
        ],
    },

    support: {
        heading: 'Support',
        items: ['Contact Us', 'Visit Us', 'Nearby', 'Location', 'Around'],
    },

    social: {
        heading: 'Social',
        items: ['Facebook', 'LinkedIn', 'twitter', 'instagram', 'youtube'],
    },
}
