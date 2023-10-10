import { useState } from "react"
import { Social } from "../../../components/Social"

export const Header = () => {
    const [isSearching, setIsSearching] = useState('0')
    const [padding, setPadding] = useState('0')
    const [margin, setMargin] = useState('32px')

    const onSearch = (  ) =>{
        if(isSearching === '0'){
            setIsSearching('200px');
            setPadding('0 32px 0 12px');
            setMargin('0');
        }else{
            setIsSearching('0');
            setPadding('0');
            setMargin('32px')
        }
    }

    return (
        <header>
            <Social />
            <section className="secondChildHeader">
                <i className="fa-regular fa-user"></i>
                <span> Account</span>
            </section>
            <section>
                <i className="fa-solid fa-bag-shopping"></i>
                <span>{` Cart: (0 $)`}</span>
            </section>
            <section className="searchSection">
                <input
                    style={{ 
                        'width': isSearching, 
                        'padding': padding, 
                        'marginLeft': margin }} 
                    placeholder="Search"
                    type="text"
                />
                <button onClick={ onSearch } className="searchButton"><i className="fa-solid fa-magnifying-glass"></i></button>
            </section>
        </header>
    )
}
