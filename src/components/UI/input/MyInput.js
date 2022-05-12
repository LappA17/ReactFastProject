import React from 'react';
import classes from './MyInput.module.css'

//Нельзя просто оставить ref в MyButton который в App.js
//Нужно обернуть вcе что в MyInput в React.forwardRef и вторым аргументом передать ref
//ref={ref} - так мы указываем куда эта ссылка должны попадать
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyInput;