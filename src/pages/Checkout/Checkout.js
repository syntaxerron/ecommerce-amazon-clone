import React from 'react'

import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
import Subtotal from '../../components/Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='product'
          className='checkout__ad'
        />

        <div>
          <p className='checkout__title'>Your Shopping Basket</p>
          <CheckoutProduct
            id={1}
            title={'Test'}
            image={''}
            price={500}
            rating={5}
          />
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
