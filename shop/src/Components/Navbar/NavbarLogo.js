import React, { Component } from 'react';
import logo from '../items/logo.png'
import '../Navbar/NavbarStyle.css'

class NavbarLogo extends Component {
    render() {
        return (
            <div className='logo'>
                <a href='#' className='logoLink'>
                    <img className='logoImg' src={logo} />
                </a>
            </div>
        );
    }
}

export default NavbarLogo;