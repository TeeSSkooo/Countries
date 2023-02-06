import CountryItem from '../country-item/CountryItem';
import Preloader from '../preloader/Preloader';

import countriesApi from '../../api/countriesApi';

import './CountryList.scss';

const CountryList = () => {
  const { data = [], isLoading } = countriesApi.useFetchCountriesQuery(null);

  return (
    <section className="country-list">
      <div className="country-list__container">
        {isLoading && <Preloader />}
        <ul className="country-list__items">
          {data.map((country) => (
            <CountryItem key={country.population} country={country} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CountryList;
