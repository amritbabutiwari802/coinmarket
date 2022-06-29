import * as React from 'react'
import News from '../compo/News'
import TrendingCard from '../compo/TrendingCard'
import CardView from '../sections/CardView'
import Footer from '../sections/Footer'
import HotCards from '../sections/HotCards'
import NavBar from '../sections/NavBar'
import Subscribe from '../sections/Subscribe'

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <div className=" pb-[25px]">
            <NavBar />
            <CardView />
            <News />

            <HotCards />

            <Subscribe />

            <Footer />
        </div>
    )
}

export default App
