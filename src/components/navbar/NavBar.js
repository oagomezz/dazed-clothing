import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as DazedLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'

import './navbar.styles.scss'
import { signOutUser } from '../../utils/firebase.utils'

const NavBar = () => {
    const { currentUser } = useContext(UserContext)

const links =  [
    {
        id: 1,
        title: 'Shop',
        url: 'shop'
    },
    {
        id: 2,
        title: 'Sign In',
        url: 'auth'
    },
    {
        id: 3,
        title: 'Cart',
        url: 'cart'
    },
]
if(currentUser != null){
    links[1].title = 'Sign Out'
}

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
            <Link  className='nav-link' to='./cart'>Cart</Link>
        </div>
    </div>
    < Outlet />
</Fragment>
)
}

export default NavBar