import React from 'react';
import css from './Form.module.css';
import map from '../../images/icons/map-pin.svg';
import phone from '../../images/icons/phone.svg';
import letter from '../../images/icons/mail.svg';

const Form = () => {
  return (
    <section className={css.formHeader}>
      <div className={css.form}>
        <div className={css.formWrapper}>
          <h3 className={css.formTitle}>Online-booking</h3>
          <form className={css.formForm} action="">
            <label className={css.formLabel} htmlFor="">
              <input
                className={css.formInput}
                type="text"
                placeholder="Name*"
              />
            </label>
            <label className={css.formLabel} htmlFor="">
              <input
                className={css.formInput}
                type="text"
                placeholder="Phone*"
              />
            </label>
            <label className={`${css.formLabel} ${css.text}`} htmlFor="">
              <textarea
                className={css.formTextarea}
                name=""
                id=""
                placeholder="Message"
              ></textarea>
            </label>
          </form>
          <button className={css.formBtn}>Send</button>
        </div>

        <div id="contacts" className={css.contacts}>
          <div className={css.contactsWrapper}>
            <div className={css.contactsTop}>
              <p className={css.contactsTitle}>Contacts</p>

              <ul className={css.contactsList}>
                <li className={css.contactsItem}>
                  <img className={css.contactsIcon} src={map} alt="map" />
                  <p className={css.contactsData}>
                    st. Vasilkovaya, 7A Kiev, 08132
                  </p>
                </li>
                <li className={css.contactsItem}>
                  <img className={css.contactsIcon} src={phone} alt="phone" />
                  <a href="tel:+38 044 111 11 11" className={css.contactsData}>
                    +38 044 111 11 11
                  </a>
                </li>
                <li className={css.contactsItem}>
                  <img className={css.contactsIcon} src={letter} alt="letter" />
                  <a
                    href="mailto:barbershop@email.com"
                    className={css.contactsData}
                  >
                    barbershop@email.com
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.contactsBoxBotton}>
              <p className={css.contactsWork}>Working hours</p>
              <p className={css.contactsTime}>Every day from 9:00 to 22:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
