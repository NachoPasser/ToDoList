import React from 'react';
import s from './NavBar.module.css';
import logo from '../img/logoHenry.png';
import {Link} from 'react-router-dom';
import axios from 'axios'
export default function NavBar(){

    function handleBtn(){
        const user = {
          username: "UHLAPTM",
          first_name: "juan",
          last_name: "perez",
          phone: "+54 2345 67534",
          password: "pass123",
        };  
        axios.post('https://pruebahenrybootcamp.herokuapp.com/register', user).then(() => console.log('Termine!'))
      }

    return(
        <div className={s.Nav}>
            <Link to='/' className={s.img}>
                <img src={logo} alt="No se encontro la img" />
            </Link>
            <h1>To-Do-List</h1>
            <button onClick={() => handleBtn()}>HOLA</button>
            <Link to='/about' className={s.about}>
                <h1>About me</h1>
            </Link>
        </div>
    )
}