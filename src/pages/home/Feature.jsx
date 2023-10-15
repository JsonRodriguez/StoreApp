import { Products } from "./components";
import { featureData } from "./data/featureData";

export const Feature = () => {

    return (
        <div className="feature">
            <h4>Échale un vistazo a nuestra variedad de productos.</h4>
            <h1>Variedad de Productos</h1>
            <div className="products">
                {featureData.map(( product ) => (
                    <Products 
                        key={ product.id } 
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
