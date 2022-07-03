import React, { useDebugValue, useState } from 'react'

type Props = {}

const MobileNavbar = (props: any) => {
    return (
        <div className="px-[25px]">
            <div className="flex justify-between items-center h-[40px] mt-[25px]">
                <img
                    src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=224f5ba"
                    className="w-[168px] h-[28px] mt-[16px] "
                />

                <svg
                    onClick={() => {
                        props.closeNav()
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height="24px"
                    width="24px"
                    viewBox="0 0 24 24"
                    className="sc-1pyr0bh-0 bSnrp"
                >
                    <path
                        d="M18 6L6 18M18 18L6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
            <div className="w-[100%] h-[1px] bg-gray-200 mt-[25px]" />
            <div>
                {data.map((value: any, dx: number) => {
                    return <NavItem key={value.name + dx} value={value} />
                })}
            </div>

            <button className=" font-semibold w-[100%] h-[40px] bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-[40px] ">
                Create an Account
            </button>
            <button className=" font-semibold w-[100%] h-[40px] bg-gray-200 hover:bg-gray-100 text-black rounded-md mt-[10px] ">
                Create an Account
            </button>

            <div className="flex gap-[16px] mt-[25px]">
                <button className="flex-1 h-[37px] bg-gray-200 hover:bg-white hover:border-blue-400 hover:border-[1px] hover:border-solid rounded-md ">
                    English
                </button>{' '}
                <button className="flex-1 h-[37px] bg-gray-200 hover:bg-white hover:border-[1px] hover:border-blue-400 hover:border-solid rounded-md">
                    Usd
                </button>{' '}
                <button className="w-[70px] h-[37px] bg-gray-200 hover:bg-white hover:border-[2px] hover:border-blue-400 hover:border-solid rounded-md">
                    here
                </button>
            </div>

            <div className="text-center mt-[25px]">
                <a className="text-[11px] font-bold text-ashgray mr-[10px] hover:text-blue-500 cursor-pointer">
                    Disclamier
                </a>{' '}
                <span>.</span>{' '}
                <a className="text-[12px] font-bold text-ashgray mr-[10px] ml-[10px] hover:text-blue-500 cursor-pointer">
                    Disclamier
                </a>{' '}
                <span>.</span>{' '}
                <a className="text-[12px] font-bold text-ashgray ml-[10px] hover:text-blue-500 cursor-pointer">
                    Disclamier
                </a>
                <br />
                <a className="text-[12px] font-bold text-ashgray mr-[10px] hover:text-blue-500 cursor-pointer">
                    Disclamier
                </a>{' '}
                <span>.</span>
                <a className="text-[12px] font-bold text-ashgray ml-[10px] hover:text-blue-500 cursor-pointer">
                    Disclamier
                </a>
            </div>
        </div>
    )
}

export default MobileNavbar

const NavItem = (props: any) => {
    const [open, setopen] = useState(false)

    return (
        <div
            onClick={() => {
                setopen(!open)
            }}
        >
            <div className="flex justify-between items-center h-[48px]">
                <h4 className="text-[16px] font-bold font-sans cursor-pointer ">
                    {props.value.name}
                </h4>
                {props.value.type == 'dropdown' && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height="22"
                        width="22"
                        viewBox="0 0 24 24"
                        className="sc-1pyr0bh-0 kRnyud"
                    >
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <svg></svg>
                    </svg>
                )}
            </div>

            {open && props.value.type == 'dropdown' && (
                <div className="flex flex-col  " data-aos="fade-down">
                    {props.value.items.map((value: any, index: any) => (
                        <a
                            onClick={(e) => {
                                e.stopPropagation()
                                alert(1)
                            }}
                            className="flex items-center gap-[10px] py-[7px] text-base font-semibold cursor-pointer "
                        >
                            <img
                                src={value.src}
                                className="w-[27px] h-[28px]"
                            />{' '}
                            {value.label}
                        </a>
                    ))}
                </div>
            )}

            <div className="w-[100%] h-[1px] bg-hrcolor" />
        </div>
    )
}

const data = [
    {
        name: 'Cryptocurriencies',
        type: 'dropdown',
        items: [
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
        ],
    },
    {
        name: 'Central Bank',
        type: 'dropdown',
        items: [
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
        ],
    },
    {
        name: 'About Us',
        type: 'dropdown',
        items: [
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
        ],
    },
    {
        name: 'Offices',
        type: 'dropdown',
        items: [
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
        ],
    },
    { name: 'Gallery', type: 'link' },
    { name: 'Gallery1', type: 'link' },
    {
        name: 'Market Cap',
        type: 'dropdown',
        items: [
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
        ],
    },
    {
        name: 'Forcast',
        type: 'dropdown',
        items: [
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
            {
                src: 'https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg',
                label: 'Home',
            },
        ],
    },
]
