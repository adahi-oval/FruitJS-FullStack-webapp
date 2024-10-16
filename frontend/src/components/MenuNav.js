import React from 'react';
import imagen from '../images/header-logo.png';
import { Link, Outlet } from 'react-router-dom';

function MenuNavegacion() {
  return (
    <nav className="menu-navegacion">
      <Link to ="/" className='logo'>
        <img src={imagen} alt="logo"/>
      </Link>
      <ul className="menu-lista">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="profile">Perfil</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="register">Registro</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default MenuNavegacion;
