import React from 'react';
import css from './Form.module.css';

const Form = () => {
  return (
    <section className={css.form}>
      <div className="container">
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
            <label className={css.formLabel} htmlFor="">
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
      </div>
    </section>
  );
};

export default Form;
