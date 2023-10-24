import { useParams } from "react-router-dom"
import { ProductDescription } from "./ProductDescription"
import { getProductById } from "../../hooks/getProductById"

export const Product = () => {
    window.scrollTo(0,0)
    const { id } = useParams();
    
    const product = getProductById( id );

    return (
        <ProductDescription product={ product } />
    )
}
