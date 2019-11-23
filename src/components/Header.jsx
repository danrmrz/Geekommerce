import React from 'react';
import { Link } from 'react-router-dom';
import iconProfile from '../assets/static/icon-profile.png';
import iconCart from '../assets/static/icon-cart.png';
import '../assets/styles/components/Header.scss'

const Header = () => (
  <header className="header">
    <Link to='/'><img alt="logotipo" className="header__img" /></Link>
    <div className="header__search">
      <input type="text" name="" id="" placeholder="Buscar" />
    </div>
    <section>
      <div className="header__menu">
        <div className="header__menu--acount">
          <img src={iconProfile} alt="imagen usuario" />
        </div>
        <ul>
          <li>
            <a href="">
              Iniciar Sesión
            </a>
          </li>
          <li>
          <Link to='/register'>
          Crear Cuenta
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__cart">
        <img src={iconCart} alt="carrito de compras" />
      </div>
    </section>
  </header>
);

export default Header;