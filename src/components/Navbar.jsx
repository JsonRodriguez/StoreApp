import { useState } from 'react';
import logo from '../images/logo.png';

export const Navbar = () => {

    const [isFix, setIsFix] = useState(false)
    
    function setFixedNavBar() {
        if (window.pageYOffset >= 0) {
            setIsFix(true);
        } else {
            setIsFix(false)
        }
    }
    
    window.addEventListener("scroll", setFixedNavBar);
    
    return (
        // <nav id='navbar' className={isFix ? 'navbar sticky' : 'navbar'}>
        <nav id='navbar' className='navbar sticky'>
            <img src={ logo } />
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">FEATURED</a></li>
                <li><a href="#">POPULAR</a></li>
                <li><a href="#">OFFER</a></li>
                <li><a href="#">ARTICLES</a></li>
            </ul>
        </nav>
    )
}
