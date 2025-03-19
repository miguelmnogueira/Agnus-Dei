import React from 'react'

import s from "../../styles/CartPage/CartNav.module.css"

const CartNav = () => {
  return (
    <div id={s.cartNav} >
        <div id={s.pricesContainer}>
            <span id={s.subtotal} >Subtotal: R$159,99</span>
            <span id={s.total} >Total: R$109,99</span>
        </div>
        <button id={s.checkoutBtn}>Checkout</button>
    </div>
  )
}

export default CartNav