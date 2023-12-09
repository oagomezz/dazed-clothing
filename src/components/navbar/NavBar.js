import React from 'react'

const NavBar = () => {

const links =  ['SHOP', "SIGN IN", "CONTACT", "CART"]
return (
    <div className='navbar'>
        <container className='brand'>
            <brand>
                Dazed Clothing Co
            </brand>
        </container>
    <ul className='link-container'>
        {links.map(link => {
            return <li>{link}</li>
        })}
    </ul>
    </div>
)
}

export default NavBar