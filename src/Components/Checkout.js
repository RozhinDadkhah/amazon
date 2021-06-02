import React from 'react'
import './Checkout.css'
import CheckOutProduct from './CheckOutProduct'
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://creativepool.com/files/candidate/portfolio/full/1381195.jpg'></img>
                <div>
                    <h3>hello</h3>
                    <h2 className='checkout__title'>Your shopping Basket</h2>
                    {basket.map(item => (
                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
