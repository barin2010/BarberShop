import React from 'react';
import css from './About.module.css';

const About = () => {
  return (
    <section className={css.about}>
      <div className="container">
        <div className={css.aboutWrapper}>
          <p className={css.aboutText}>About</p>
          <h3 className={css.aboutTitle}>Best Barbershop in your city</h3>
          <p className={css.aboutTextTwo}>
            If you want to add more confidence to your image, you should visit
            us
          </p>
          <p className={css.aboutDescr}>
            We are a team that never stops at what has been achieved and are
            thirsty for changes. And when you fall into the hands of our master,
            you will never be the same again. We are a team that is always "on
            the same wave" with clients. Therefore, we are always ready to
            improve everyone who comes to us!
          </p>
          <button className={css.aboutBtn} type="button">
            online-booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
