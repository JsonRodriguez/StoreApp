import { useState } from "react"
import { getProductByCategory, getProductBySeach } from "../../../hooks"

export const HeaderShop = ({ setProducts }) => {

    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState('1')

    const onSelected = (event) => {
        setQuery('')
        const value = event.currentTarget.id;
        if(value === selected) return
        if(value === '1'){
            setSelected('1');
            setProducts(getProductByCategory('all'));
        }else if(value === '2'){
            setSelected('2');
            setProducts(getProductByCategory('Adornos'));
        }else if(value === '3'){
            setSelected('3');
            setProducts(getProductByCategory('Collares'));
        }else if(value === '4'){
            setSelected('4');
            setProducts(getProductByCategory('Pendientes'));
        }else if(value === '5'){
            setSelected('5');
            setProducts(getProductByCategory('Pulseras'));
        }
    }



    const handleSearching = (event) => {
        if(query.length === 0) {
            setProducts(getProductByCategory('all'))
            setSelected('1')
        }
        if(event.key !== 'Enter' && event.type === 'keydown') return
        if(query.length < 3) return
        setProducts(getProductBySeach(query))
    }

    return (
        <div className="header-filter">
            <ul>
                <li><button id="1" onClick={ onSelected }>Todo<span style={ selected === '1' ? {width: '100%'} : {width: '0'} }></span></button></li>
                <li><button id="2" onClick={ onSelected }>Adornos<span style={ selected === '2' ? {width: '100%'} : {width: '0'} }></span></button></li>
                <li><button id="3" onClick={ onSelected }>Collares<span style={ selected === '3' ? {width: '100%'} : {width: '0'} }></span></button></li>
                <li><button id="4" onClick={ onSelected }>Pendientes<span style={ selected === '4' ? {width: '100%'} : {width: '0'} }></span></button></li>
                <li><button id="5" onClick={ onSelected }>Pulseras<span style={ selected === '5' ? {width: '100%'} : {width: '0'} }></span></button></li>
            </ul>
            <div className="arcoirisBG">
                <div className="filterSearch">
                    <button onClick={ handleSearching }><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input value={query} onKeyDown={ handleSearching } onChange={ (e) => setQuery(e.target.value) } placeholder="Search" type="text" />
                </div>
            </div>
        </div>
    )
}
