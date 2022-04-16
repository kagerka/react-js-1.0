import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img className={s.logo_img} src="https://image.flaticon.com/icons/png/512/873/873140.png" alt=""/>
      <div className={s.title}>
        <h1>Social network</h1>
      </div>
    </header>
  );
}

export default Header;
