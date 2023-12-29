import React from 'react'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/home.js'
import Authentication from './routes/authentication/authentication.js'
import Shop from './routes/shop/shop.component.js'
import Checkout from './routes/checkout/checkout.js'


const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={ <NavBar /> }>
          <Route index  element={ <Home /> }/>
          <Route path='/shop/*' element={ <Shop /> }/>
          <Route path='/auth'  element={ < Authentication /> }/>
          <Route path='/checkout'  element={ < Checkout /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App