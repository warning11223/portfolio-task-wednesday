import React from 'react';

import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                    <nav className={s.nav}>
                        <ul className={s.list}>
                            <li className={s.listItem}>
                                <a className={s.listLink} href="#">Main</a>
                            </li>
                            <li className={s.listItem}>
                                <a className={s.listLink} href="#">Skills</a>
                            </li>
                            <li className={s.listItem}>
                                <a className={s.listLink} href="#">Works</a>
                            </li>
                            <li className={s.listItem}>
                                <a className={s.listLink} href="#">Contacts</a>
                            </li>
                        </ul>
                    </nav>
            </div>
        </div>
    );
};

export default Header;
