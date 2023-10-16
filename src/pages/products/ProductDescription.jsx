import img1 from '../../images/product1.png';

export const ProductDescription = (
    { 
        img = img1, 
        name = 'Atrapasuenos', 
        description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam mollitia sequi ab ea, adipisci laudantium voluptatum labore laborum consectetur cum ex. Quae rerum neque sint aliquid delectus eveniet laboriosam suscipit.', 
        price = '$ 400.000'
    }) => {
    return (
        <div className="productDescription">
            <img src={ img } className='animate__animated animate__fadeInLeft'/>
            <div className="content">
                <h1 className='animate__animated animate__fadeInRight'>{ name }</h1>
                <span className="description animate__animated animate__fadeInRight animate__delay-1s">{ description }</span>
                <h2 className="price animate__animated animate__fadeInRight animate__delay-2s">{ price }</h2>
                <button className='animate__animated animate__fadeInRight animate__delay-3s'>Comprar <i className="fa-solid fa-money-check-dollar "></i></button>
            </div>
        </div>
    )
}
