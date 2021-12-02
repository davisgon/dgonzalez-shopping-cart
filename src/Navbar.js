import React, { useContext } from 'react'
import { useGlobalContext } from './components/ShoppingContext'

const Navbar = () => {
     
  //let amount = 880; 
  return (
    <nav>
      <div className='nav-center'>
        <h3>Shopping Cart</h3>
        <h3>Total Cart</h3>
      </div>
    </nav>
  )
}

export default Navbar
