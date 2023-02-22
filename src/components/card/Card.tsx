import React from 'react';

import s from './Card.module.css'

type CardType = {
    img: string
    title: string
    desc: string
}

const Card: React.FC<CardType> = ({ img, title, desc }) => {
    return (
        <div className={s.card}>
            <img className={s.img} src={img} alt="image_card"/>
            <h3 className={s.title}>{title}</h3>
            <p className={s.desc}>{desc}</p>
        </div>
    );
};

export default Card;
