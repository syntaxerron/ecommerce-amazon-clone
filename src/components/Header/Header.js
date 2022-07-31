import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import StorefrontIcon from '@mui/icons-material/Storefront'
import SearchIcon from '@mui/icons-material/Search'

import './Header.css'

function Header() {
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='header__logo'>
          <StorefrontIcon className='header__logImage' fontSize='large' />
          <h1 className='header__logoTitle'>E-SHOP</h1>
        </div>
      </Link>

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Hello Guest</span>
          <span className='nav__itemLineTwo'>Sign in</span>
        </div>
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Your</span>
          <span className='nav__itemLineTwo'>Shop</span>
        </div>

        <Link to='checkout' style={{ textDecoration: 'none' }}>
          <div className='nav__itemBasket'>
            <ShoppingCartIcon />
            <span className='nav__itemLineTwo nav__basketCount'>0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
