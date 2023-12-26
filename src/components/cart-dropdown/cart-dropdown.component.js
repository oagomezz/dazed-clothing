import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  
  return (
    <div className='cart-dropdown-container'>
        < div className='cart-items'>
          {cartItems.map(item => <CartItem key={item.id} CartItem={item}/>)}
        </div>
        <Button onClick={goToCheckoutHandler} buttonType='button' >Checkout</Button>
    </div>
  )
}

export default CartDropdown