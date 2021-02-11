import React from 'react';
import {Link} from "react-router-dom";
import s from './Header.module.css';


const Header = () => {

    return <div className={s.header}>
        <nav>
            <ul>
                <Link to='/'>
                    <a className={s.navLink}>Главная</a>
                </Link>
                <Link exact to='/employees'>
                    <a className={s.navLink}>Сотрудники</a>
                </Link>
            </ul>
        </nav>
    </div>
};


export default Header;