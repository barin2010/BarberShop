import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <section className={css.footer}>
      <div className="container">
        <div className={css.footerWrapper}>
          <ul className={css.footerList}>
            <li className={css.footerLine}></li>
            <li className={css.footerItem}>
              <a href="#/">Instagram</a>
            </li>
            <li className={css.footerItem}>
              <a href="#/">Youtube</a>
            </li>
          </ul>
          <p className={css.footerText}>Copyright 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
