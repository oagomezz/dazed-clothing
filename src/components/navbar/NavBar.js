import { Fragment } from 'react'
import './navbar.styles.scss'
import { ReactComponent as DazedLogo } from '../../assets/crown.svg'
import { Outlet, Link } from 'react-router-dom'

const NavBar = () => {

const links =  [
    {
        id: 1,
        title: 'Shop',
        url: 'shop'
    },
    {
        id: 2,
        title: 'Sign In',
        url: 'sign_in'
    },
    {
        id: 3,
        title: 'Cart',
        url: 'cart'
    },
]
return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to={'./'}>
                <DazedLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
            {links.map((link) => {
                return <Link key={link.id} className='nav-link' to={`/${link.url}`}>{link.title}</Link>
            })}
            </div>
        </div>
        < Outlet />
    </Fragment>
)
}

export default NavBar