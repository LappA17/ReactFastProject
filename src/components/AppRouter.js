import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AuthContext from './context/AuthContext';
//import Error from './pages/Error';
//import About from './pages/About';
//import Posts from './pages/Posts';

//import PostIdPage from './pages/PostIdPage';//создадим маршрут для каждого поста по его айди
//для того что бы маршрут был динамической нужно поставить : и затем название параметра
//и в первом и во втором случае ключевое слово является post и что бы Роутер воспринимал их как разные нужно exact

import privateRoutes,{publicRoutes} from './router/Router'
import Spinner from './spinner/Spinner';


const AppRouter = () => {
    //const isAuth = true //авторизованный ли пользователь
    /*С этой переменной могут быть проблемы, так как эта переменная может понадобитсья нам и в НавБаре, и еще в каких-то переменных и
    постоянно прокидывать через Пропсы - это невозможно и здесь нам понадобиться Хук useContext
    С помощью Contexta мы можем создать некоторое Глобальное Хранилище и из любого Компонента к этому Глобальному Хранилищу обращаться,
    при этом избегая передачу от родителя к ребёнку */
    const {isAuth, isLoading} = useContext(AuthContext) //так мы передаем context и можем получить все поля с value

    if (isLoading) {
        return <Spinner/>
    }

    return (
            isAuth 
                ? <Switch> {privateRoutes.map(route =>
                    <Route component={route.component} //тепреь передаем как пропсы
                           path={route.path} 
                           exact={route.exact}
                           ket={route.path} />
                  )} 
                  <Redirect to='/posts'/>
                  </Switch>
                : <Switch>{publicRoutes.map(route =>
                    <Route component={route.component} //тепреь передаем как пропсы
                           path={route.path} 
                           exact={route.exact} 
                           ket={route.path}/>
                  )} 
                  <Redirect to="/Login"/>
                  </Switch>
    );
};

export default AppRouter;

/* <Redirect to='/posts'/> К примеру если пользователь вёл что-то неправильно его редиректинт на posts*/
