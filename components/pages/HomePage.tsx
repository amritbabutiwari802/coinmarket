import * as React from 'react'
import Filter from '../compo/Filter'
import News from '../compo/News'
import Table_one from '../compo/Table_one'
import TrendingCard from '../compo/TrendingCard'
import CardView from '../sections/CardView'
import Footer from '../sections/Footer'
import HotCards from '../sections/HotCards'
import NavBar from '../sections/NavBar'
import Subscribe from '../sections/Subscribe'

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    const [ismd, setmd] = React.useState(false)

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 767) {
                setmd(true)
            }
        }
    }, [])

    return (
        <div className=" xl:flex xl:flex-col xl:items-center ">
            <div className=" max-w-[1400px] pb-[25px]">
                <NavBar />
                <CardView />
                <News />

                {ismd && <HotCards />}

                <Filter />

                <Table_one />

                <Subscribe />

                <Footer />
            </div>
        </div>
    )
}

export default App
