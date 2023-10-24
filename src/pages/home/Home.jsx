import { Feature } from './Feature'
import { Slice } from './Slice'
import { Header, Contact, SendMessage } from './components'

export const Home = () => {
    return (
        <>
            {/* <Header /> */}
            <Slice />
            <Contact />
            <Feature />
            <SendMessage />
        </>
    )
}
