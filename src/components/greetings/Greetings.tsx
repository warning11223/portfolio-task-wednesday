import React from 'react';

import s from './Greetings.module.css'

const Greetings = () => {
    return (
        <div className={s.block1}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.info}>
                        <p className={s.greetings}>Hello!</p>
                        <p className={s.name}>My name is Denis</p>
                        <h1 className={s.title}>I'm a frontend developer</h1>
                    </div>
                    <div className={s.image}>
                        <img src="" alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greetings;
