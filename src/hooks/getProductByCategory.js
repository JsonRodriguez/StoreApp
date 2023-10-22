import { products } from '../data/products';

export const getProductByCategory = ( category ) => {
    if( category === 'all' ){
        return products
    }else{
        return products.filter( product => product.category.includes(category))
    }
}
