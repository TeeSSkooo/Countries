import CountryItem from '../country-item/CountryItem';
import Preloader from '../preloader/Preloader';

import getFilteredData from '../../helpers/getFilteredData';
import useAppSelector from '../../hooks/redux/useAppSelector';
import countriesApi from '../../api/countriesApi';

import './CountryList.scss';

const CountryList: React.FC = () => {
  const { data = [], isLoading, isError, error } = countriesApi.useFetchCountriesQuery(null);

  const { searchQuery, activeFilter } = useAppSelector((state) => state.countries);

  const filteredData = getFilteredData(data, searchQuery, activeFilter).sort((a, b) =>
    a.name.common > b.name.common ? 1 : -1
  );

  if (isLoading) return <Preloader />;

  if (isError) {
    return <h2 style={{ textAlign: 'center' }}>{JSON.stringify(error)}</h2>;
  }

  return (
    <section className="country-list">
      <div className="country-list__container">
        {!filteredData.length && <h2 style={{ textAlign: 'center' }}>No match countries</h2>}
        <ul className="country-list__items">
          {filteredData.map((country) => (
            <CountryItem key={country.name.official} country={country} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CountryList;
