import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ReactPaginate from 'react-paginate'

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5]

const Paginate = (props: any) => {
    const [current, setCurrent] = useState<any>(4)
    const [start, setStart] = useState<any>(1)
    const [end, setend] = useState<any>(40)

    const [mode, setmode] = useState<number>(10)

    useEffect(() => {
        if (end - start > 4) {
            if (current == start) {
                setmode(1)
            } else if (current == end) {
                setmode(2)
            } else if (current == start + 1) {
                setmode(3)
            } else if (current == end - 1) {
                setmode(4)
            } else {
                setmode(10)
            }
        } else {
            setmode(7)
        }
    }, [current, end, start])

    function setCurrentValue(item: number) {
        setCurrent(item)
    }

    return (
        <div className="flex justify-center py-[25px]">
            {mode != 7 && (
                <div className="flex">
                    <Item
                        setCurrent={setCurrentValue}
                        highlight={true}
                        hidden={mode == 1 || mode == 3 ? true : false}
                        item={start}
                    />
                    <div
                        className={` mx-[10px] ${
                            mode == 1 || mode == 3 ? 'hidden' : ''
                        }  `}
                    >
                        ...
                    </div>
                    <Item
                        setCurrent={setCurrentValue}
                        hidden={mode == 1 ? true : false}
                        item={current - 1}
                    />
                    <Item
                        setCurrent={setCurrentValue}
                        item={current}
                        highlight={true}
                    />
                    <Item
                        setCurrent={setCurrentValue}
                        hidden={mode == 2 ? true : false}
                        item={current + 1}
                    />
                    <div
                        className={` mx-[10px] ${
                            mode == 2 || mode == 4 ? 'hidden' : ''
                        }  `}
                    >
                        ...
                    </div>
                    <Item
                        setCurrent={setCurrentValue}
                        hidden={mode == 2 || mode == 4 ? true : false}
                        highlight={true}
                        item={end}
                    />
                </div>
            )}

            {mode == 7 && (
                <div className="flex">
                    {items.map((value: number, index: number) => (
                        <Item
                            setCurrent={setCurrentValue}
                            key={value}
                            item={value}
                            highlight={current == value ? true : false}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

const Item = (props: any) => (
    <button
        onClick={() => {
            props.setCurrent(props.item)
        }}
        className={`mx-[4px] px-[7px] h-[25px] rounded-md  ${
            props.hidden ? 'hidden' : ''
        } ${
            props.highlight
                ? 'bg-blue-500 text-white text-sm font-semibold'
                : 'font-semibold text-sm'
        } `}
    >
        {props.item}
    </button>
)

export default Paginate
