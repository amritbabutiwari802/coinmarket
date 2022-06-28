import * as React from 'react'
import Footer from '../sections/Footer'
import Subscribe from '../sections/Subscribe'

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <div className=" pb-[25px]">
            <Subscribe />
            <Footer />
        </div>
    )
}

export default App
