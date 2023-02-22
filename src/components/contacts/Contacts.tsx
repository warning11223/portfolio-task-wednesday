import React from 'react';

import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <div className={s.inner}>
                    <h4 className={s.title}>Contacts</h4>
                    <form className={s.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea cols={30} rows={10}></textarea>
                    </form>
                    <button className={s.btn} type='submit'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
