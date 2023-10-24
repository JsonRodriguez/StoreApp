import { useState } from "react"
import { getProductByCategory } from "../../hooks"
import { CardsShop } from "./CardsShop"
import { HeaderShop } from "./components/HeaderShop"

export const Shop = () => {

    const [products, setProducts] = useState(getProductByCategory('all'))

    return (
        <div id="shop" className="shop">
            <HeaderShop setProducts={ setProducts } />
            <CardsShop products={ products } />
        </div>
    )
}
