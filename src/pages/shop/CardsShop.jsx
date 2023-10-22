import { CardShop } from "./components/CardShop"

export const CardsShop = ({ products }) => {
    return (
        <div className="cardsShop">
            <CardShop products={ products } />
        </div>
    )
}
