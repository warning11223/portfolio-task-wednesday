import React from 'react';

import s from './Item.module.css'

type ItemProps = {
    name: string
    desc: string
    img: string
}

const Item: React.FC<ItemProps> = ({name, img, desc}) => {
    return (
        <div className={s.item}>
            <div className={s.img}>
                <div className={s.button}>Look</div>
            </div>
            <div className={s.desc}>
                <h4 className={s.name}>{name}</h4>
                <p className={s.text}>{desc}</p>
            </div>
        </div>
    );
};

export default Item;
