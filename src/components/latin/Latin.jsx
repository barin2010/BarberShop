import React from 'react';
import css from './Latin.module.css';
import latin1_1x from '../../images/mobile/latin1_1x.png';
import tabLatin1 from '../../images/tablet/latinTab1_1x.png';
import descLatin1 from '../../images/desctop/latinDesc1_1x.jpg';
import latin2_1x from '../../images/mobile/latin2_1x.jpg';
import tabLatin2 from '../../images/tablet/latinTab2_1x.jpg';
import descLatin2 from '../../images/desctop/latinDesc2_1x.jpg';
import latin3_1x from '../../images/mobile/latin3_1x.png';
import tabLatin3 from '../../images/tablet/latinTab3_1x.png';
import descLatin3 from '../../images/desctop/latinDesc3_1x.jpg';
import latin4_1x from '../../images/mobile/latin4_1x.png';
import tabLatin4 from '../../images/tablet/latinTab4_1x.png';
import descLatin4 from '../../images/desctop/latinDesc4_1x.jpg';

const Latin = () => {
  return (
    <section className={css.latin}>
      <div className="container">
        <div className={css.latinWrapper}>
          <p className={css.latinText}>In Latin, "barba" means "beard"</p>
          <ul className={css.latinList}>
            <li className={css.latinItem}>
              <picture>
                <source media="(max-width: 480px )" srcSet={latin1_1x} />
                <source media="(min-width: 768px )" srcSet={tabLatin1} />
                <source media="(min-width: 1600px)" srcSet={descLatin1} />
                <img className={css.latinImg} src={latin1_1x} alt="latin" />
              </picture>
            </li>
            <li className={css.latinItem}>
              <picture>
                <source media="(max-width: 480px )" srcSet={latin2_1x} />
                <source media="(min-width: 768px )" srcSet={tabLatin2} />
                <source media="(min-width: 1600px)" srcSet={descLatin2} />
                <img className={css.latinImg} src={latin2_1x} alt="latin" />
              </picture>
            </li>
            <li className={css.latinItem}>
              <picture>
                <source media="(max-width: 480px )" srcSet={latin3_1x} />
                <source media="(min-width: 768px )" srcSet={tabLatin3} />
                <source media="(min-width: 1600px)" srcSet={descLatin3} />
                <img className={css.latinImg} src={latin3_1x} alt="latin" />
              </picture>
            </li>
            <li className={css.latinItem}>
              <picture>
                <source media="(max-width: 480px )" srcSet={latin4_1x} />
                <source media="(min-width: 768px )" srcSet={tabLatin4} />
                <source media="(min-width: 1600px)" srcSet={descLatin4} />
                <img className={css.latinImg} src={latin4_1x} alt="latin" />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Latin;
