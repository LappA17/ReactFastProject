import { BrowserRouter} from "react-router-dom";
import Navbar from "./UI/navbar/Navbar";
import AppRouter from "./AppRouter";
import AuthContext from "./context/AuthContext";
import { useEffect, useState } from "react";

//Switch позволяет при неправильном воде адрессной строки либо Редиректунть на нужное страницу, либо вывести Компонент с ошибкой
function App() { 

    const [isAuth, setIsAuth] = useState(false)

    //сделаем так что бы если пользователь был на комментариях, его не перекидывало после обновление странички на посты
    const [isLoading, setLoading] = useState(true)

    //проверка авторизован ли пользователь или нет
    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }//else писать не будем потому setIsAuth(false) по дефолту в false
        setLoading(false)
    }, []) //пустой массив потому что нужно проверить только один раз

    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth: setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
