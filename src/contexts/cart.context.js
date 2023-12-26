import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

    if( existingCartItem ) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
    }
        return [...cartItems, {...productToAdd, quantity: 1}]

    // return new array with modified / new cart items.
}
const removeCartItem = (cartItems, productToRemove) => {
    
    const removedCartItem = cartItems.find(item => item.id === productToRemove.id)

    if( removedCartItem.quantity === 1 ) {
        return cartItems.filter(cartItem => cartItem.id !== removedCartItem.id)
    }

    return cartItems.map(cartItem => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem )
}
const removeAllCartItems = (cartItems, productToRemove) => {
    const removedCartItem = cartItems.find(item => item.id === productToRemove.id);
    return cartItems.filter(cartItem => cartItem.id !== removedCartItem.id);
}
export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    removeAllItemsFromCart: () => {},
    cartTotal:0
})

export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [ cartItems, setCartItems] = useState([])
    const [ cartCount, setCartCount ] = useState(0)
    const [ cartTotal, setCartTotal] = useState(0)

    useEffect( () => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect( () => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const removeAllItemsFromCart = (productToRemove) => {
        setCartItems(removeAllCartItems(cartItems, productToRemove))
    }
    const value = { isOpen, setIsOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, removeAllItemsFromCart, cartTotal  }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

