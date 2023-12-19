import { createContext, useState } from 'react'

// as the actual value I want to access
export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
})

export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const value = { isOpen, setIsOpen }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}