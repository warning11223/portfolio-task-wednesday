import React from 'react';

import s from './Works.module.css'
import Item from '../item/Item';

const items = [
    {id: 1, name: 'Title 1', desc: 'Lorem ipsum dolor sit amet, consectetur.', img: 'hello world'},
    {id: 2, name: 'Title 2', desc: 'Lorem ipsum dolor sit amet, consectetur.', img: 'hello world'},
]

const Works = () => {

    const itemsRender = items.map(item => {
        return <Item key={item.id} name={item.name} desc={item.desc} img={item.img}/>
    })

    return (
        <div className={s.works}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.top}>
                        <h3 className={s.title}>My works</h3>
                    </div>
                    <div className={s.bottom}>
                        {itemsRender}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
