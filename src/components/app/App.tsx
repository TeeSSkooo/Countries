import useAppSelector from '../../hooks/redux/useAppSelector';

import Header from '../header/Header';
import Form from '../form/Form';
import CountryList from '../country-list/CountryList';

import './App.scss';

export default function App() {
  const { isDarkTheme } = useAppSelector((state) => state.countries);

  return (
    <div className={`app ${isDarkTheme ? 'dark' : 'light'}`}>
      <Header />
      <main className="app__main">
        <Form />
        <CountryList />
      </main>
    </div>
  );
}
