import React from 'react';
import logo from '../../img/logo-footer.png'
import '../../style/footer/footer.css'

export default function Footer() {
    return(
        <footer>
            <img src={logo} alt="Logo de Kasa" className='logo-footer' />
            <p className='credits'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
    }
    