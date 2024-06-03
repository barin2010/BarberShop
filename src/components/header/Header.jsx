import React from 'react';
import { useState } from 'react';
import css from './Header.module.css';
import Modal from 'components/modal/Modal';
import logo from '../../images/icons/Logo.svg';
import burger from '../../images/icons/menu_24px.svg';
import logo_black from '../../images/icons/Logo_black.svg';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className={css.header}>
      {open && <Modal open={open} setOpen={setOpen} />}
      <div className="container">
        <div className={css.tabletWrapper}>
          <div className={css.tabletAsaid}>
            <img className={css.logoBlack} src={logo_black} alt="logo" />
            <ul className={css.tabletSocialList}>
              <li className={css.tabletSocialItem}>
                <a className={css.tabletSocialLink} href="#/">
                  Youtube
                </a>
              </li>
              <li className={css.tabletSocialItem}>
                <a className={css.tabletSocialLink} href="#/">
                  Instagram
                </a>
              </li>
            </ul>
            <div className={css.tabletSocialLine}></div>
          </div>
          <div className={css.tabletHeader}>
            <div className={css.headerWrapper}>
              <div className={css.tabletNavigation}>
                <ul className={css.tabletList}>
                  <li className={css.tabletsItem}>
                    <a className={css.tabletLink} href="#/">
                      About
                    </a>
                  </li>
                  <li className={css.tabletsItem}>
                    <a className={css.tabletLink} href="#services">
                      Services and prices
                    </a>
                  </li>
                  <li className={css.tabletsItem}>
                    <a className={css.tabletLink} href="#barbers">
                      Barbers
                    </a>
                  </li>
                  <li className={css.tabletsItem}>
                    <a className={css.tabletLink} href="#contacts">
                      Contacts
                    </a>
                  </li>
                </ul>
                <div className={css.tabletBoxPhone}>
                  <button className={css.tabletBtn}>Online-booking</button>
                  <a
                    className={css.tabletPhone}
                    href="mailto:+38 044 111 11 11"
                  >
                    +38 044 111 11 11
                  </a>
                </div>
              </div>
              <div className={css.navigation}>
                <img className={css.headerLogo} src={logo} alt="logo" />
                <img
                  onClick={() => setOpen(true)}
                  className={css.headerMenu}
                  src={burger}
                  alt="menu"
                />
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
        </div>
      </div>
    </section>
  );
};

export default Header;
