import { Footer, Navbar } from '../../components'
import { Feature } from './Feature'
import { Slice } from './Slice'
import { Header, Contact, SendMessage } from './components'

export const Home = () => {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <Slice />
            <Contact />
            <Feature />
            <SendMessage />

            <Footer />
        </>
    )
}
