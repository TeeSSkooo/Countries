import sun from '../../assets/sun.png';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__title" href="/">
          Where is the world?
        </a>
        <div className="header__theme">
          <div className="header__img-wrapper">
            <img className="header__img" src={sun} alt="Sun" />
          </div>
          <button className="header__btn">Light Theme</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
