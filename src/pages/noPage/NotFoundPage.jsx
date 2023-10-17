import { Footer, Navbar } from '../../components';
import { Error404 } from './Error404';

export const NotFoundPage = () => {
    window.scrollTo(0,0)
    return (
        <div className="noFoundPage">
            <Navbar />
            <Error404 />
            <Footer />
        </div>
    )
}
