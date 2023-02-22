import React from 'react';

import s from './Skills.module.css'
import Card from '../card/Card';

const cards = [
    {id: 1, title: 'React', desc: 'Lorem ipsum dolor sit amet, consectetur.', img: 'hello world'},
    {id: 2, title: 'Js', desc: 'Lorem ipsum dolor sit amet, consectetur.', img: 'hello world'},
    {id: 3, title: 'Redux', desc: 'Lorem ipsum dolor sit amet, consectetur.', img: 'hello world'},
]

const Skills = () => {

    const renderCards = cards.map(item => {
        return <Card key={item.id} img={item.img} title={item.title} desc={item.desc} />
    })

    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.innerTop}>
                        <h2 className={s.title}>My skills</h2>
                    </div>
                    <div className={s.innerBottom}>
                        {renderCards}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
