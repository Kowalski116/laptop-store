import React from 'react'
import {Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import Review from './Review'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
const PaymentForm = ({ backStep }) => {
    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault();

        if(!stripe || ! elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: CardElement });

        if (error) {
            console.log(error)
        } else {
            const orderData = {
            }
        }
    }
    return (
        <>
            <Review />
            <Divider />
            <Typography variant ='h6' gutterBottom style={{ margin: '20px 0'}}>Payment method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e)=> handleSubmit(e, elements, stripe)}>
                            <cardElement />
                            <br /> <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Button variant='outlined' onClick={backStep}>Back</Button>
                                <Button type='submit' variant='contained' disabled={!stripe} color='primary'>Pay</Button>

                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm
