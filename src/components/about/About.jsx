import React from 'react';
import css from './About.module.css';
import img1_1x from '../../images/tablet/img 1_1x.png';
import img1_2x from '../../images/tablet/img 1_2x.png';
import img2_1x from '../../images/tablet/img 2_1x.png';
import img2_2x from '../../images/tablet/img 2_2x.png';
import desc1_1x from '../../images/desctop/imgDesc1_1x.jpg';
import desc1_2x from '../../images/desctop/imgDesc1_2x.jpg';
import desc2_1x from '../../images/desctop/imgDesc 2_1x.jpg';
import desc2_2x from '../../images/desctop/imgDesc2_2x.jpg';

const About = () => {
  return (
    <section id="about" className={css.about}>
      <div className="container">
        <div className={css.aboutWrapper}>
          <ul className={css.tabletList}>
            <li className={css.tabletItem}>
              <img
                className={css.tabletImg2}
                srcSet={`${desc1_1x}1x ${desc1_2x}2x`}
                src={desc1_1x}
                alt="man"
              />
              <img
                className={css.tabletImg1}
                srcSet={`${img1_1x}1x ${img1_2x}`}
                src={img1_1x}
                alt="man"
              />
            </li>
            <li className={css.tabletItem}>
              <img
                className={css.tabletImg2}
                srcSet={`${desc2_1x}1x ${desc2_2x}2x`}
                src={desc2_1x}
                alt="man"
              />
              <img
                className={css.tabletImg1}
                srcSet={`${img2_1x}1x ${img2_2x}2x`}
                src={img2_1x}
                alt="man"
              />
            </li>
          </ul>
          <div className={css.aboutMobile}>
            <p className={css.aboutText}>About</p>
            <h3 className={css.aboutTitle}>Best Barbershop in your city</h3>
            <p className={css.aboutTextTwo}>
              If you want to add more confidence to your image, you should visit
              us
            </p>
            <p className={css.aboutDescr}>
              We are a team that never stops at what has been achieved and are
              thirsty for changes. And when you fall into the hands of our
              master, you will never be the same again. We are a team that is
              always "on the same wave" with clients. Therefore, we are always
              ready to improve everyone who comes to us!
            </p>
            <button className={css.aboutBtn} type="button">
              online-booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
