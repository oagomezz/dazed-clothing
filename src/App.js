import React from 'react'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/home.js'
import Sign_in from './routes/sign_in/Sign_in.js'


const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={ <NavBar /> }>
          <Route index  element={ <Home /> }/>
          <Route path='/sign_in'  element={ <Sign_in /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App