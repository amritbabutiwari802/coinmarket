import React, { useEffect, useState } from 'react'
import mobile from '../../pages/mobile'
import MobileNavbar from './MobileNavbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Menu } from '@headlessui/react'

type Props = {
    param: any
}

const NavBar = (props: Props) => {
    const [ismobile, setmobile] = useState(true)
    const [ismobileopen, setmobileopen] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 1280) {
                setmobile(false)
            }
        }
    }, [])

    React.useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    function setmobileOpenX() {
        setmobileopen(!ismobileopen)
    }

    return (
        <div className="px-[10px]">
            {!ismobileopen && (
                <div>
                    {!ismobile && (
                        <div className="flex justify-between mt-[7px]">
                            <Slider />
                            <div className="flex ">
                                <button className="text-xs w-[70px] flex items-center font-bold ">
                                    English{' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-[12px] w-[14px] self-center"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <button className="text-xs w-[70px] flex items-centers font-bold ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-[16px] w-[16px] self-center fill-teal-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    USD
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-[12px] w-[14px] self-center"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[16px] w-[16px]"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            </div>
                        </div>
                    )}
                    <Navbar setmobileopen={setmobileOpenX} />{' '}
                    {ismobile && <Slider />}
                </div>
            )}

            {ismobileopen && (
                <div data-aos="fade-right">
                    {' '}
                    <MobileNavbar closeNav={setmobileopen} />{' '}
                </div>
            )}
        </div>
    )
}

export default NavBar

const Navbar = (props: any) => {
    const [ismobile, setmobile] = useState(true)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 1280) {
                setmobile(false)
            }
        }
    }, [])

    return (
        <div className=" flex gap-[40px] items-center h-[71px] w-[100%] max1280:justify-between ">
            <div>
                <img
                    src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=224f5ba"
                    className="h-[28px] w-[169px]"
                />
            </div>
            {!ismobile && (
                <>
                    <div className="flex justify-between flex-1 ">
                        {data.map((value: any, index: number) => (
                            <NavItem key={value.name + index} data={value} />
                        ))}
                    </div>
                    <div className="flex gap-[10px] ">
                        <img
                            src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg"
                            className="w-[20px] h-[20px] self-center"
                        />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            color="#000000,#808A9D"
                            className=" w-[20px] h-[20px] self-center "
                        >
                            <path d="M12 22C13.4191 22 14.5702 20.8809 14.5702 19.5H9.42978C9.42978 20.8809 10.5809 22 12 22ZM20.654 16.152C19.8778 15.341 18.4253 14.1211 18.4253 10.125C18.4253 7.08984 16.2364 4.66016 13.2849 4.06406V3.25C13.2849 2.55977 12.7096 2 12 2C11.2904 2 10.7151 2.55977 10.7151 3.25V4.06406C7.76358 4.66016 5.57466 7.08984 5.57466 10.125C5.57466 14.1211 4.12221 15.341 3.34596 16.152C3.10489 16.4039 2.99802 16.7051 3.00003 17C3.00445 17.6406 3.52154 18.25 4.28976 18.25H19.7102C20.4785 18.25 20.996 17.6406 21 17C21.002 16.7051 20.8951 16.4035 20.654 16.152Z"></path>
                            <svg></svg>
                        </svg>

                        <button className="w-[72px] h-[37px] hover:bg-gray-100 rounded-md">
                            Login
                        </button>

                        <button className="w-[79px] h-[37px] bg-blue-500 hover:bg-blue-600 rounded-md text-white font-bold text-xs  ">
                            Sign Up
                        </button>

                        <div className="flex items-center bg-[#EFF2F5] text-[#A6B0C3] p-[8px] w-[156px] h-[38px] rounded-md ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-1pyr0bh-0 ffizwl"
                            >
                                <path
                                    d="M16.4153 16.4153L20 20M18.5455 11.2727C18.5455 15.2893 15.2894 18.5454 11.2728 18.5454C7.25612 18.5454 4 15.2893 4 11.2727C4 7.2561 7.25612 4 11.2728 4C15.2894 4 18.5455 7.2561 18.5455 11.2727Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <svg></svg>
                            </svg>
                            <span>Search</span>
                        </div>
                    </div>{' '}
                </>
            )}

            {ismobile && (
                <div className="flex justify-self-end gap-[25px] ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height="24px"
                        width="24px"
                        viewBox="0 0 24 24"
                        className="sc-1pyr0bh-0 bSnrp"
                    >
                        <path
                            d="M16.4153 16.4153L20 20M18.5455 11.2727C18.5455 15.2893 15.2894 18.5454 11.2728 18.5454C7.25612 18.5454 4 15.2893 4 11.2727C4 7.2561 7.25612 4 11.2728 4C15.2894 4 18.5455 7.2561 18.5455 11.2727Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="22px"
                        width="22px"
                        viewBox="0 0 24 24"
                        color="#000000,#808A9D"
                        className="sc-1prm8qw-0 beZwib fill-slate-400 "
                    >
                        <path d="M12 22C13.4191 22 14.5702 20.8809 14.5702 19.5H9.42978C9.42978 20.8809 10.5809 22 12 22ZM20.654 16.152C19.8778 15.341 18.4253 14.1211 18.4253 10.125C18.4253 7.08984 16.2364 4.66016 13.2849 4.06406V3.25C13.2849 2.55977 12.7096 2 12 2C11.2904 2 10.7151 2.55977 10.7151 3.25V4.06406C7.76358 4.66016 5.57466 7.08984 5.57466 10.125C5.57466 14.1211 4.12221 15.341 3.34596 16.152C3.10489 16.4039 2.99802 16.7051 3.00003 17C3.00445 17.6406 3.52154 18.25 4.28976 18.25H19.7102C20.4785 18.25 20.996 17.6406 21 17C21.002 16.7051 20.8951 16.4035 20.654 16.152Z"></path>
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        onClick={props.setmobileopen}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            )}
        </div>
    )
}

const NavItem = (props: any) => {
    const [showlist, setlist] = useState(false)
    return (
        <div
            className="flex flex-col overflow-hidden "
            onMouseOver={() => {
                setlist(true)
            }}
            onMouseOut={() => {
                setlist(false)
            }}
        >
            <span className="text-sm font-bold flex flex-col cursor-pointer hover:text-blue-500 ">
                {props.data.name}
            </span>
            <div
                className={`  flex flex-col float absolute z-[50] bg-white shadow-2xl px-[25px] gap-[10px] mt-[18px] pb-[16px] rounded-md ${
                    showlist ? '' : 'hidden'
                } `}
            >
                {' '}
                {props.data.type == 'dropdown' && (
                    <>
                        {props.data.items.map((value: any, index: number) => {
                            return <a>{value}</a>
                        })}
                    </>
                )}
            </div>
        </div>
    )
}

const Slider = (props: any) => {
    return (
        <div className="flex gap-[16px] ml-[25px]  overflow-x-scroll pb-[7px] novscroll">
            {sliderdata.map((value: any, index: number) => (
                <SliderItem key={value.key + index} data={value} />
            ))}
        </div>
    )
}

const SliderItem = (props: any) => {
    return (
        <span className="flex  whitespace-nowrap">
            <div className="text-xs text-slate-500 font-bold inline-block">
                {props.data.key}
            </div>
            <div className="text-xs text-blue-600 font-bold ml-[4px]">
                {props.data.value}
            </div>
        </span>
    )
}

const sliderdata = [
    {
        key: 'Cryptos:',
        value: '20,256',
    },
    {
        key: 'Exchanges:',
        value: '509',
    },
    {
        key: 'Market Cap:',
        value: '$909,506,721,788.442',
    },
    {
        key: '24h Vol:',
        value: '$56,640,337,183.61',
    },
    {
        key: 'Dominance:',
        value: 'BTC: 42.5% ETH: 15.3%',
    },
    {
        key: 'Cryptos:',
        value: '20,256',
    },
]

const data = [
    {
        name: 'Cryptocurriencies',
        type: 'dropdown',
        items: ['Home', 'office', 'park', 'Family'],
    },
    {
        name: 'Central Bank',
        type: 'dropdown',
        items: ['Home', 'office', 'park', 'Family'],
    },
    {
        name: 'About Us',
        type: 'dropdown',
        items: ['Home', 'office', 'park', 'Family'],
    },
    {
        name: 'Offices',
        type: 'dropdown',
        items: ['Home', 'office', 'park', 'Family'],
    },
    { name: 'Gallery', type: 'link' },
    { name: 'Gallery1', type: 'link' },
    {
        name: 'Market Cap',
        type: 'dropdown',
        items: ['Home', 'office', 'park', 'Family'],
    },
    {
        name: 'Forcast',
        type: 'dropdown',
        items: ['Home', 'office', 'park', 'Family'],
    },
]
