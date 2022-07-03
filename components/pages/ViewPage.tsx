import React from 'react'
import Filter from '../component/Filter'
import News from '../component/News'
import PaginatedItems from '../component/Paginate'
import Table_one from '../component/Table_one'
import TMarketCap from '../component/TMarketCap'
import TrendingCard from '../component/TrendingCard'
import CardView from '../sections/CardView'
import Footer from '../sections/Footer'
import HotCards from '../sections/HotCards'
import NavBar from '../sections/NavBar'
import Subscribe from '../sections/Subscribe'

type Props = {}

const ViewPage = (props: any) => {
    const [ismd, setmd] = React.useState(false)

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 767) {
                setmd(true)
            }
        }
    }, [])

    return (
        <div className=" 2xl:flex 2xl:flex-col 2xl:items-center ">
            <div className=" xl:max-w-[1400px] pb-[25px]">
                <NavBar param={props.param} />
                <TMarketCap tokenname={props.param + ' Ecosystem Token'} />
                <Filter param={props.param} />

                <Table_one />
                <PaginatedItems />

                <Subscribe />

                <Footer />
            </div>
        </div>
    )
}

export default ViewPage
