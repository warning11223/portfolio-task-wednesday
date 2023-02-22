import React from 'react';

import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <h4 className={s.footerTitle}>Portfolio (c)</h4>
                    <ul className={s.list}>
                        <li className={s.listItem}>
                            <img className={s.listIcon} src="" alt="icon"/>
                        </li>
                        <li className={s.listItem}>
                            <img className={s.listIcon} src="" alt="icon"/>
                        </li>
                        <li className={s.listItem}>
                            <img className={s.listIcon} src="" alt="icon"/>
                        </li>
                        <li className={s.listItem}>
                            <img className={s.listIcon} src="" alt="icon"/>
                        </li>
                    </ul>
                    <p className={s.rights}>(c) 2023 all rights are reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
