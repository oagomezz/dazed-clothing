import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

const CheckoutItem = ({ CheckoutItem }) => {
    const { name, quantity, price, imageUrl } = CheckoutItem
    const { removeAllItemsFromCart, removeItemFromCart, addItemToCart } = useContext(CartContext)

    const ClearItemHandler = () => removeAllItemsFromCart(CheckoutItem)
    const removeItemHandler = () => removeItemFromCart(CheckoutItem)
    const addItemHandler = () => addItemToCart(CheckoutItem)

return (
    <div className='checkout-item-container'>
        <img className='image-container' src={imageUrl} alt={name} />
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
            {quantity} 
            <div className='arrow' onClick={addItemHandler}> &#10095; </div>
        </span>
        
        <span className='price'>{price}</span>
        <span onClick={ClearItemHandler}>&#10005;</span>
    </div>
)}

export default CheckoutItem