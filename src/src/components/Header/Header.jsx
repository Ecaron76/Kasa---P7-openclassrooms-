import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'
import '../../style/header/header.css'
export default function Header(props) {
    return(
        <header>
            <img src={logo} alt="Logo de Kasa" className='logo' />
            <div className='nav'>
                <Link to='/' className={props.underlineHome}>Accueil</Link>
                <Link to='/propos' className={props.underlinePropos}>A propos</Link>
            </div>
        </header>
    )
    
}