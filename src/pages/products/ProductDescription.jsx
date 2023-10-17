
export const ProductDescription = ({ product }) => {
    return (
        <div className="productDescription">
            <img src={ product.img } className='animate__animated animate__fadeInLeft'/>
            <div className="content">
                <h1 className='animate__animated animate__fadeInRight'>{ product.name }</h1>
                <span className="description animate__animated animate__fadeInRight animate__delay-1s">{ product.description }</span>
                <h2 className="price animate__animated animate__fadeInRight animate__delay-2s">{ product.price }</h2>
                <button className='animate__animated animate__fadeInRight animate__delay-3s'>Comprar <i className="fa-solid fa-money-check-dollar "></i></button>
            </div>
        </div>
    )
}
