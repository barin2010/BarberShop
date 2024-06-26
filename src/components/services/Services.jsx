import React from 'react';
import css from './Services.module.css';

const Services = () => {
  return (
    <section id="services" className={css.services}>
      <div className="container">
        <div className={css.servicesWrapper}>
          <p className={css.servicesText}>
            Spend your time with the best masters
          </p>
          <h3 className={css.sercesTitle}>Services and prices</h3>
          <div className={css.serviceListBox}>
            <ul className={`${css.servicesList} ${css.top}`}>
              <li className={css.servicesItem}>
                <p className={css.itamTextOne}>
                  Children’s haircut (0-12 y.o.)
                </p>
                <span className={css.itemTextSpan}></span>
                <p className={css.itamTextTwo}>from 300 uah.</p>
              </li>
              <li className={css.servicesItem}>
                <p className={css.itamTextOne}>Men’s haircut</p>
                <span className={css.itemTextSpan}></span>

                <p className={css.itamTextTwo}>from 300 uah.</p>
              </li>
              <li className={css.servicesItem}>
                <p className={css.itamTextOne}>Beard trim</p>
                <span className={css.itemTextSpan}></span>
                <p className={css.itamTextTwo}>from 200 uah.</p>
              </li>
              <li className={css.servicesItem}>
                <p className={css.itamTextOne}>Mustache trim</p>
                <span className={css.itemTextSpan}></span>
                <p className={css.itamTextTwo}>from 200 uah.</p>
              </li>
            </ul>
            <ul className={`${css.servicesList} ${css.botton}`}>
              <li className={css.servicesItem}>
                <p className={css.itamTextOne}>Straight razor shave</p>
                <span className={css.itemTextSpan}></span>
                <p className={css.itamTextTwo}>from 200 uah.</p>
              </li>
              <li className={css.servicesItem}>
                <p className={css.itamTextOne}>Camouflage of grey hair</p>
                <span className={css.itemTextSpan}></span>
                <p className={css.itamTextTwo}>from 200 uah.</p>
              </li>
              <li className={css.servicesItem}>
                <p className={css.itamTextOne}>Trainee’s haircut</p>
                <span className={css.itemTextSpan}></span>
                <p className={css.itamTextTwo}>from 50 uah.</p>
              </li>
              <li className={css.servicesItem}>
                <p className={css.itamTextOne}>Haircut under the nozzle</p>
                <span className={css.itemTextSpan}></span>
                <p className={css.itamTextTwo}>from 200 uah.</p>
              </li>
            </ul>
          </div>
          <button className={css.servicesBtn} type="button">
            online-booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
