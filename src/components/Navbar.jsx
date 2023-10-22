import logo from '../images/logo.png';
// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';

export const Navbar = () => {

    // const [isFix, setIsFix] = useState(false)
    
    // function setFixedNavBar() {
    //     if (window.pageYOffset >= 0) {
    //         setIsFix(true);
    //     } else {
    //         setIsFix(false)
    //     }
    // }

    const onTop = () => {
        window.scrollTo(0,0);
    }
    
    // window.addEventListener("scroll", setFixedNavBar);
    
    return (
        // <nav id='navbar' className={isFix ? 'navbar sticky' : 'navbar'}>
        <nav id='navbar' className='navbar sticky'>
            <a href="/"><img src={ logo } /></a>
            <ul>
                <li><a onClick={onTop} href='/#'>INICIO</a></li>
                <li><a href="/#socials">CATEGORIAS</a></li>
                <li><a href="/shop">PRODUCTOS</a></li>
                <li><a href="/#contactus">CONTACTÁTANOS</a></li>
            </ul>
        </nav>
    )
}
