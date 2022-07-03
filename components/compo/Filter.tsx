import React, { useState } from 'react'
import { Chart, ChevaronDown, HSlider, Star, Table_X } from './Icons'
import { Menu } from '@headlessui/react'
import { Popover } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Listbox } from '@headlessui/react'

type Props = {
    param: any
}

const Filter = (props: Props) => {
    return (
        <div className="flex gap-[10px] px-[25px] mt-[40px] overflow-x-scroll  novscroll ">
            <div className="flex gap-[10px]  ">
                <a>
                    {' '}
                    <button className="flex gap-[10px] text-xs font-bold bg-slate-100 h-[31px] px-[14px] items-center items-center ">
                        <Star className=" w-[12px] h-[20px] " />
                        <p>Watchlist</p>
                    </button>{' '}
                </a>

                <a>
                    {' '}
                    <button className="flex gap-[10px] text-xs font-bold bg-slate-100 h-[31px] px-[14px] items-center rounded-md ">
                        <Chart className=" w-[12px] h-[20px] " />
                        <p>Watchlist</p>
                    </button>{' '}
                </a>
            </div>
            <div className="h-[16px] w-[1px] self-center bg-slate-400" />
            <div className="flex">
                {Filterkeys.map((value: string, index: number) => (
                    <span key={value + index}>
                        {' '}
                        <FilterItem
                            name={value}
                            selected={value == props.param ? true : false}
                        />
                    </span>
                ))}
            </div>
            <div>
                <RowItems />
            </div>
            <FilterButton /> <CustomizeButton />
        </div>
    )
}

export default Filter

const FilterItem = (props: any) => {
    const router = useRouter()
    return (
        <a
            onClick={() => {
                props.name == 'CryptoCurriencies'
                    ? router.push('/')
                    : router.push('/views/' + props.name)
            }}
        >
            {' '}
            <button
                className={
                    props.selected
                        ? ' px-[14px] bg-blue-50 text-blue-500  text-xs font-bold h-[31px] rounded-md '
                        : ' px-[14px] text-slate-700 text-xs font-extrabold h-[31px] rounded-md '
                }
            >
                {' '}
                {props.name}{' '}
            </button>{' '}
        </a>
    )
}

const FilterWl = (props: any) => {
    return (
        <a>
            {' '}
            <button
                className={
                    props.selected
                        ? ' px-[14px] bg-blue-50 text-blue-500  text-sm font-bold h-[31px] rounded-md '
                        : ' px-[14px] text-black-900 text-sm font-bold h-[31px] rounded-md '
                }
            >
                {' '}
                {props.name}{' '}
            </button>{' '}
        </a>
    )
}

const RowItems = (props: any) => {
    const [rows, setRows] = useState(100)
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <div className="flex items-center gap-[7px]">
            <p className="text-xs font-semibold whitespace-nowrap">Show rows</p>
            {/* <Popover className="relative">
                <Popover.Button className="flex text-xs font-extrabold h-[31px] gap-[4px] items-center bg-gray-100 px-[7px] rounded-lg ">
                    {rows} <ChevaronDown className="h-[14px] w-[14px]" />{' '}
                </Popover.Button>

                <Popover.Panel className="absolute opacity-100 bg-white z-10 px-[25px] shadow-2xl ">
                    <div className="flex flex-col gap-[20px] text-base font-semibold py-[20px] ">
                        <a href="/analytics">100</a>
                        <a href="/engagement">50</a>
                        <a href="/security">20</a>
                    </div>

                    <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
            </Popover> */}
            <select
                name="rows"
                id="rows"
                className="flex text-xs font-extrabold h-[31px] gap-[4px] items-center bg-gray-100 px-[7px] rounded-lg "
            >
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
            </select>
        </div>
    )
}

const FilterButton = () => (
    <button className="flex items-center gap-[4px] self-center w-[72px] h-[31px] bg-gray-100 rounded-lg px-[7px] ">
        {' '}
        <HSlider className=" w-[12px] h-[18px] " />{' '}
        <p className="text-sm font-bold">Filter</p>{' '}
    </button>
)

const CustomizeButton = () => (
    <button className="flex items-center gap-[4px] self-center  h-[31px] bg-gray-100 rounded-lg px-[7px] ">
        {' '}
        <Table_X className=" w-[20px] h-[20px] " />{' '}
        <p className="text-sm font-bold">Customize</p>{' '}
    </button>
)

const Filterkeys = [
    'CryptoCurriencies',
    'Categories',
    'Defi',
    'NFT',
    'Metaverse',
    'Polkadots',
    'BnBChain',
    'Sonola',
    'Avalanche',
]

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
