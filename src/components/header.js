import React, { useState } from 'react';
// import reactDom from 'react-dom';
import logo from '../images/DesignCode-Logo.svg';
import './header.css';

const Header = () => {
    const [hasScrolled, setScrolled] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50){
            setScrolled(true);
        }else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeBackground);
    
    return(
        <div  className={ hasScrolled ? 'header headerScrolled' : 'header' }>
            <div className='header-group'>
                <a href=""><img src={logo} width="30px" /></a>
                <a href="">Courses</a>
                <a href="">Downloads</a>
                <a href="">Workshops</a>
                <a href=""><button>Buy</button></a>
            </div>
        </div>
    )
    

}

export default Header;