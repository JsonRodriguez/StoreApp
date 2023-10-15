import React from 'react'

export const Products = ({ img, name, category, price }) => {
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
