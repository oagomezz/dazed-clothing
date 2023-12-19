import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as DazedLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import './navbar.styles.scss'
import { signOutUser } from '../../utils/firebase.utils'

const NavBar = () => {
    const { currentUser } = useContext(UserContext)
    const { isOpen } = useContext(CartContext)

return (
    <Fragment>
    <div className='navigation'>
        <Link className='logo-container' to={'./'}>
            <DazedLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='./shop'>Shop</Link>
            { currentUser ? (
                <span onClick={signOutUser} className='nav-link'>Sign Out</span> )
             : <Link className='nav-link' to='./auth'>Sign In</Link>
            }  
            <CartIcon/>
        </div>
        { isOpen && <CartDropdown />}
    </div>
    < Outlet />
</Fragment>
)
}

export default NavBar