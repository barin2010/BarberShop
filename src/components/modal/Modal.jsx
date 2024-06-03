import css from './Modal.module.css';
import close from '../../images/icons/close_40px.svg';

const Modal = ({ open, setOpen }) => {
  const handleModalClick = e => {
    e.stopPropagation();
  };
  return (
    <div onClick={() => setOpen(false)} className={css.ovelay}>
      <div onClick={handleModalClick} className={css.modalWrapper}>
        <img
          onClick={() => setOpen(false)}
          className={css.modalClose}
          src={close}
          alt="close"
        />
        <ul className={css.contactsList}>
          <li className={css.contactsItem}>
            <a
              onClick={() => setOpen(false)}
              className={css.contactsLink}
              href="#about"
            >
              About
            </a>
          </li>
          <li className={css.contactsItem}>
            <a
              onClick={() => setOpen(false)}
              className={css.contactsLink}
              href="#services"
            >
              Services and prices
            </a>
          </li>
          <li className={css.contactsItem}>
            <a
              onClick={() => setOpen(false)}
              className={css.contactsLink}
              href="#barbers"
            >
              Barbers
            </a>
          </li>
          <li className={css.contactsItem}>
            <a
              onClick={() => setOpen(false)}
              className={css.contactsLink}
              href="#contacts"
            >
              Contacts
            </a>
          </li>
        </ul>
        <a className={css.contactsPhone} href="tel:+38 044 111 11 11">
          +38 044 111 11 11
        </a>
        <button className={css.modalBtn}>online-booking</button>
        <ul className={css.socialList}>
          <li className={css.socialItem}>
            <a className={`${css.socialLink} ${css.top}`} href="#/">
              Instagram
            </a>
          </li>
          <li className={css.socialItem}>
            <a className={css.socialLink} href="#/">
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
