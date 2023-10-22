import { Products } from "../../../components/Products"
import logo from '../../../images/icon.png';

export const CardShop = ( product ) => {
    const products = product.products;
    return (
        <>
            {
                products.length > 0
                ?   <div className="cardShop">
                        {
                            products.length > 0 
                            ?
                                products.map(( prod ) => (
                                    <Products 
                                        key={ prod.id } 
                                        id={ prod.id }
                                        img={ prod.img } 
                                        name={ prod.name }
                                        category={ prod.category }
                                        price={ prod.price }
                                    />
                                ))
                            :

                            <>hola</>
                        }
                    </div>
                :   <div className="noProductFound">
                        <img src={ logo }/>
                        <h1>Producto No Encontrado</h1>
                    </div>
            }
        </>
    )
}
