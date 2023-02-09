import { Routes, Route } from 'react-router-dom';

import Header from '../header/Header';
import HomePage from '../../pages/homepage/HomePage';
import CountryDetailsPage from '../../pages/country-details/CountryDetailsPage';
import NotFoundPage from '../../pages/not-found/NotFoundPage';

import useAppSelector from '../../hooks/redux/useAppSelector';

import './App.scss';

export default function App() {
  useAppSelector((state) => state.countries.theme);

  return (
    <div className={`app ${localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<CountryDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
