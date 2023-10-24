import { useState } from 'react';
import logo from '../images/logo.png';

export const Navbar = ({ setTheme, theme }) => {

    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [stick1, setStick1] = useState({'transform': 'rotate(0deg)'})
    const [stick2, setStick2] = useState({'opacity': '100%'})
    const [stick3, setStick3] = useState({'transform': 'rotate(0deg)'})

    const onTop = () => {
        window.scrollTo(0,0);
    }

    const handleOptions = () => {
        if(isOptionOpen){
            setIsOptionOpen(false)
            setStick1({'transform': 'rotate(0deg)'})
            setStick2({'opacity': '100%'})
            setStick3({'transform': 'rotate(0deg)'})
        }else{
            setIsOptionOpen(true)
            setStick1({'transform': 'rotate(45deg)'})
            setStick2({'opacity': '0'})
            setStick3({'transform': 'rotate(-45deg)'})
        }
    }

    const handleDarkTheme = () => {
        if( theme === 'dark' ) {
            setTheme('light');
        }else{
            setTheme('dark');
        }
    }
        
    return (
        <nav id='navbar' className='navbar sticky' >
            <div className='navContainer'>
                <a href="/"><img src={ logo } /></a>
                <div className="btnContainer">
                    <button className='btnDarkTheme' onClick={ handleDarkTheme }>
                        {
                            theme === 'dark' ?
                            <i className="fa-solid fa-sun"></i> :
                            <i className="fa-solid fa-moon"></i>
                        }
                    </button>
                </div>
            </div>
            <div className='btnOptions' onClick={ handleOptions }>
                <div style={stick1}></div>
                <div style={stick2}></div>
                <div style={stick3}></div>
            </div>
            <ul className={isOptionOpen ? 'openOptins' : ''}>
                <li><a onClick={onTop} href='/#'>INICIO</a></li>
                <li><a href="/#socials">CATEGORIAS</a></li>
                <li><a href="/shop">PRODUCTOS</a></li>
                <li><a href="/#contactus">CONTACTÁTANOS</a></li>
            </ul>
        </nav>
    )
}
