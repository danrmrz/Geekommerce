import React from 'react';
import iconProfile from '../assets/static/icon-profile.png';
import iconCart from '../assets/static/icon-cart.png';
import '../assets/styles/components/Header.scss'

const Header = () => (
  <header className="header">
    <img src="" alt="logotipo" className="header__img" />
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
            <a href="">
              Crear Cuenta
            </a>
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