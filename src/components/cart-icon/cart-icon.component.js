import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
  const { isOpen , setIsOpen } = useContext(CartContext)

  return (
    <div className='cart-icon-container'>
        <ShoppingIcon onClick={() => setIsOpen(!isOpen)}className='shopping-icon'/>
        <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon