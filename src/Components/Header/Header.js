import React from 'react'
import './Header.css'
import logo from '../../assets/logo2.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <Link to="/">
        <img className='header__logo' src={logo} alt="amazonLogo"/>
        </Link>
        
        <div className='header__search'>
            <input className='header__serchInput'/>
            <SearchIcon className='header__searchIcons'/>
        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__option-line1'>Hello, Guest</span>
                <span className='header__option-line2'>Sign in</span>
            </div>
            <div className='header__option'>
                <span className='header__option-line1'>returns</span>
                <span className='header__option-line2'>& Orders</span>
            </div>
            <div className='header__option'>
            <span className='header__option-line1'>Your</span>
                <span className='header__option-line2'>Prime</span>
            </div>
            <Link to='/checkout'>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionLine2 header__basketCount'>
                    0
                </span>
            </div></Link>
        </div>
    </div>
  )
}

export default Header