import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn} >
            {children}
        </button>
    );
};

export default MyButton;

/* ...props -Нам нужно передать в Баттон пропс дисейблед из Компонента App.js, мы разварачиваем все пропсы - таким образом все Пропсы, которые
мы будем передавать в MyButton будут улетать в эту Кнопку. Таким образом через Компонент MyButton мы можем все передавать в корневую
кнопку button */