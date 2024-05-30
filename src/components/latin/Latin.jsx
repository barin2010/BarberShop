import React from 'react';
import css from './Latin.module.css';
import latin1_1x from '../../images/mobile/latin1_1x.png';
import latin1_2x from '../../images/mobile/latin1_2x.png';
import latin2_1x from '../../images/mobile/latin2_1x.jpg';
import latin2_2x from '../../images/mobile/latin2_2x.jpg';
import latin3_1x from '../../images/mobile/latin3_1x.png';
import latin3_2x from '../../images/mobile/latin3_2x.png';
import latin4_1x from '../../images/mobile/latin4_1x.png';
import latin4_2x from '../../images/mobile/latin4_2x.png';

const Latin = () => {
  return (
    <section className={css.latin}>
      <div className="container">
        <div className={css.latinWrapper}>
          <p className={css.latinText}>In Latin, "barba" means "beard"</p>
          <ul className={css.latinList}>
            <li className={css.latinItem}>
              <img
                className={css.latinImg}
                srcSet={`${latin1_1x}1x ${latin1_2x}`}
                src={latin1_1x}
                alt="latin"
              />
            </li>
            <li className={css.latinItem}>
              <img
                className={css.latinImg}
                srcSet={`${latin2_1x}1x ${latin2_2x}`}
                src={latin2_1x}
                alt="latin"
              />
            </li>
            <li className={css.latinItem}>
              <img
                className={css.latinImg}
                srcSet={`${latin3_1x}1x ${latin3_2x}`}
                src={latin3_1x}
                alt="lat"
              />
            </li>
            <li className={css.latinItem}>
              <img
                className={css.latinImg}
                srcSet={`${latin4_1x}1x ${latin4_2x}`}
                src={latin4_1x}
                alt="latin"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Latin;
