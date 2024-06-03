import React from 'react';
import css from './Traditional.module.css';
import plus from '../../images/icons/+.svg';

const Traditional = () => {
  return (
    <section className={css.traditional}>
      <div className="container">
        <div className={css.traditionalWrapper}>
          <div className={css.traditionalTextBox}>
            <p className={css.traditionalText}>Old traditional school</p>
            <h3 className={css.traditionalTitle}>¿Why people come to us?</h3>
            <p className={css.traditionalDEscr}>
              Only good things are said about us. But it's better to see and
              feel 1 time than read 10 times.
            </p>
          </div>
          <div className={css.traditionalBox}>
            <ul className={css.traditionalList}>
              <li className={css.traditionalItem}>
                <div className={css.traditionalItemBox}>
                  <p className={css.traditionalNumber}>600</p>
                  <img className={css.traditionalImg} src={plus} alt="+" />
                </div>
                <p className={css.traditionalStatus}>
                  Satisfied customers per day
                </p>
              </li>
              <li className={css.traditionalItem}>
                <div className={css.traditionalItemBox}>
                  <p className={css.traditionalNumber}>20</p>
                  <img className={css.traditionalImg} src={plus} alt="+" />
                </div>
                <p className={css.traditionalStatus}>Kyiv’s best barbers</p>
              </li>
            </ul>
            <ul className={`${css.traditionalList} ${css.right}`}>
              <li className={`${css.traditionalItem} ${css.top}`}>
                <div className={css.traditionalItemBox}>
                  <p className={css.traditionalNumber}>50</p>
                  <img className={css.traditionalImg} src={plus} alt="+" />
                </div>
                <p className={css.traditionalStatus}>
                  Awards for excellent service
                </p>
              </li>
              <li className={css.traditionalItem}>
                <div className={css.traditionalItemBox}>
                  <p className={css.traditionalNumber}>100</p>
                  <img className={css.traditionalImg} src={plus} alt="+" />
                </div>
                <p className={css.traditionalStatus}>
                  Gifts for regular customers
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traditional;
