//Теперь сделаем так что бы некоторые маршруты были доступны только авторизованным пользователем и недоступны некоторые для неавторизованных

import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const Login = () => {

    //создадим фцию после нажатия на кнопку Войти пользователь попадал в Прайвет с Паблика
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)

        //будем сохранять в локалСторедж в момент авторизации
        localStorage.setItem('auth', 'true') //'true' потому что в локалСторедж можно сохранять только строки
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Ведите пароль'/>
                <MyInput type="password" placeholder='Ведите логин'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;