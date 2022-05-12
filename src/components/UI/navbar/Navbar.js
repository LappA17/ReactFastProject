import { useContext } from "react";
import { Link } from "react-router-dom";
//Link - позволяет переходить без перезагрузки, to заменяет href
import MyButton from '../button/MyButton'
import AuthContext from '../../context/AuthContext'

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    //после нажатия выйти нужно удалять запись 'true' из localStorage
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton  onClick={logout}>Выйти</MyButton>
            <div className="navbar__links"></div>
            <Link to="/about">О сайте</Link>
            /
            <Link to="/posts">Посты</Link>
        </div>
    );
};

export default Navbar;