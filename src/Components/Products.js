import React from 'react'
import './Products.css'
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from './StateProvider'


function Products({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <StarRateIcon className='home__icon' />
                    ))}
                </div>
            </div>
            <img src={image}></img>
            <button onClick={addToBasket}>add to basket</button>
        </div>
    )
}

export default Products
