import * as React from 'react'
import Filter from '../compo/Filter'
import News from '../compo/News'
import Paginate from '../compo/Paginate'
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
        <div className=" 2xl:flex 2xl:flex-col 2xl:items-center ">
            <div className=" xl:max-w-[1400px] pb-[25px]">
                <NavBar param="CryptoCurriencies" />
                <CardView />
                <News />

                {ismd && <HotCards />}

                <Filter param="CryptoCurriencies" />

                <Table_one />
                <Paginate />

                <Subscribe />

                <Footer />
            </div>
        </div>
    )
}

export default App
