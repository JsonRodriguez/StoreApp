import { products } from '../data/products';

export const getProductBySeach = ( query ) => {
    query = query.toLowerCase().trim();
    return products.filter( product => product.name.toLowerCase().includes( query ))
    // console.log(products.filter( product => product.name.includes(search)))
}
