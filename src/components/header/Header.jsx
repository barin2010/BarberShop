import React from 'react';
import css from './Header.module.css';
import logo from '../../images/icons/Logo.svg';
import burger from '../../images/icons/menu_24px.svg';

const Header = () => {
  return (
    <section className={css.header}>
      <div className="container">
        <div className={css.headerWrapper}>
          <div className={css.navigation}>
            <img className={css.headerLogo} src={logo} alt="logo" />
            <img className={css.headerMenu} src={burger} alt="menu" />
          </div>
          <div className={css.headerBlock}>
            <p className={css.blockSalon}>A hair salon for men in Kyiv</p>
            <h1 className={css.blockTitle}>BarberShop</h1>
            <p className={css.blockText}>
              We are experts in trendy men’s haircuts. We work quickly,
              carefully and with style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
