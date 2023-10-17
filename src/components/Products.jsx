import React from 'react'
import noImg from '../images/no-image.jpeg'
import { Link, Navigate } from 'react-router-dom'

export const Products = ({
        id, 
        img = noImg, 
        name, 
        category, 
        price 
    }) => {

    if(img === '') img = noImg

    const onViewProduct = () => {
        console.log('a')
        return <Navigate to="/producto" />
    }

    return (
        <div className='product-card'>
            <Link to={`/producto/${id}`} className="view">
                <img src={ img } />
                <div className="viewProduct">Ver Producto</div>
            </Link>
            <span className="productName">{ name }</span>
            <span className="productCategory">{ category }</span>
            <span className="productPrice">{ price }</span>
        </div>
    )
}
