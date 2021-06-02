import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckOutProduct from './CheckOutProduct'
import { Link ,useHistory} from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue()
    const history = useHistory()

    const stripe = useStripe()
    const elements = useElements()

    const [succeded, setSucceded] = useState(false)
    const [processing, setProcessing] = useState('')

    const [error, setError] = useState(null)
    const [disable, setDisable] = useState(null)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])


    const handlesubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ PaymentIntent }) => {
            setSucceded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })

    }

    const handlechange = e => {
        setDisable(e.empty)
        setError(e.error ? e.error.massage : '')
    }
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                {/* delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                    </div>
                </div>

                {/* review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
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

                {/* payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handlesubmit}>
                            <CardElement onChange={handlechange} />
                            <div className='payment__pricecontainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>
                                                order total :{value}
                                            </h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disable || succeded}>
                                    <span>{processing ? <p>Proccesing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
