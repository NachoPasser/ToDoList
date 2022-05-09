import React from 'react';
import s from './NavBar.module.css';
import logo from '../img/logoHenry.png';
import {Link} from 'react-router-dom';
export default function NavBar(){
    return(
        <div className={s.Nav}>
            <Link to='/' className={s.img}>
                <img src={logo} alt="No se encontro la img" />
            </Link>
            <h1>To-Do-List</h1>
            <Link to='/about' className={s.about}>
                <h1>About me</h1>
            </Link>
        </div>
    )
}