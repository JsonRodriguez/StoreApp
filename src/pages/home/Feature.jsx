import { Products } from "../../components/Products";
import { featureData } from "./data";

export const Feature = () => {

    return (
        <div id="feature" className="feature">
            <h4>Échale un vistazo a nuestra variedad de productos.</h4>
            <h1>Variedad de Productos</h1>
            <div className="products">
                {featureData.map(( product ) => (
                    <Products 
                        key={ product.id } 
                        id={ product.id }
                        img={ product.img } 
                        name={ product.name }
                        category={ product.category }
                        price={ product.price }
                    />
                ))}
            </div>
        </div>
    )
}
