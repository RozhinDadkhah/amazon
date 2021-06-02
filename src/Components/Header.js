import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { useStateValue } from './StateProvider';
import { auth } from '../Firebase'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue()

    const handleSignIn = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img src='https://m.media-amazon.com/images/G/35/gc/designs/livepreview/amazon_logo_noto_email_v2016_au-main._CB444479176_.png' className='header__logo'></img>
            </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput'></input>
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div className='header__option' onClick={handleSignIn}>
                        <span className='header__optionLineOne'>hello {!user ? 'Guest' : user.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out ' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>returns</span>
                    <span className='header__optionLineTwo'>& ordder</span>

                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>your</span>
                    <span className='header__optionLineTwo'>prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
