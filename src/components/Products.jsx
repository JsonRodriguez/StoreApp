import React from 'react'
import noImg from '../images/no-image.jpeg'

export const Products = ({ 
        img = noImg, 
        name, 
        category, 
        price 
    }) => {

    if(img === '') img = noImg

    return (
        <div className='product-card'>
            <div className="view">
                <img src={ img } />
                <div className="viewProduct">Ver Producto</div>
            </div>
            <span className="productName">{ name }</span>
            <span className="productCategory">{ category }</span>
            <span className="productPrice">{ price }</span>
        </div>
    )
}
