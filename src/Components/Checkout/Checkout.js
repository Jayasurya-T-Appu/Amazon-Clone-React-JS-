import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal/Subtotal'

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://images.freekaamaal.com/post_images/1569387009.jpg' alt='offer banner'/>
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout