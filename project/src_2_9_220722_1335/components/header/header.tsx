import Logo from '../logo/logo';

function Header(): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <Logo />

      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <a href="/" className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
