import useAppSelector from '../../hooks/redux/useAppSelector';
import useAppDispatch from '../../hooks/redux/useAppDispatch';
import { changeColorTheme } from '../../features/countries/countriesSlice';

import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';

import './Header.scss';

const Header: React.FC = () => {
  const { isDarkTheme } = useAppSelector((state) => state.countries);
  const dispatch = useAppDispatch();

  const changeTheme = (): void => {
    dispatch(changeColorTheme());
  };

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__title" href="/">
          Where is the world?
        </a>
        <div className="header__theme">
          <div className="header__img-wrapper">
            <img
              className="header__img"
              src={isDarkTheme ? moon : sun}
              alt={isDarkTheme ? 'Moon' : 'Sun'}
            />
          </div>
          <button className="header__btn" onClick={changeTheme}>
            {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
