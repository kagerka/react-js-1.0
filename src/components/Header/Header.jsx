import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import userPhoto from '../../assets/images/userpic-man.png';
function Header(props) {
  return (
    <header className={s.header}>
      <img
        className={s.logo_img}
        src='https://image.flaticon.com/icons/png/512/873/873140.png'
        alt=''
      />
      <div className={s.title}>
        <h1>Social network</h1>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.loginContent}>
            <div className={s.loginImg}>
              <img src={userPhoto} alt='' />
            </div>
            <div className={s.loginName}>{props.login}</div>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
