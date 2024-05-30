import React from 'react';
import css from './Contacts.module.css';
import map from '../../images/icons/map-pin.svg';
import phone from '../../images/icons/phone.svg';
import letter from '../../images/icons/mail.svg';

const Contacts = () => {
  return (
    <section className={css.contacts}>
      <div className="container">
        <div className={css.contactsWrapper}>
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
          <p className={css.contactsWork}>Working hours</p>
          <p className={css.contactsTime}>Every day from 9:00 to 22:00</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
