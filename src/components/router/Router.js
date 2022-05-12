import About from "../pages/About"
import Login from "../pages/Login"
import PostIdPage from "../pages/PostIdPage"
import Posts from "../pages/Posts"

//Благодрая такой оптимизации router не будет разростаться до невероятных размеров !

//для авторизованых пользователей маршруты
const privateRoutes = [
    {path: '/About', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true}
]

//для всех юзеров
export const publicRoutes = [
    {path: '/Login', component: Login, exact: true},
]

export default privateRoutes