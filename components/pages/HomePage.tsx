import * as React from 'react'
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
    return (
        <div className="flex flex-col">
            <div className=" pb-[25px] max-w-[1402px] self-center">
                <NavBar />
                <CardView />
                <News />

                <HotCards />

                <Table_one />

                <Subscribe />

                <Footer />
            </div>
        </div>
    )
}

export default App
