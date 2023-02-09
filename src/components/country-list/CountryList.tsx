import CountryItem from '../country-item/CountryItem';
import Preloader from '../preloader/Preloader';

import Country from '../../types/Country';
import filterData from '../../helpers/getFilteredData';
import useAppSelector from '../../hooks/redux/useAppSelector';
import countriesApi from '../../api/countriesApi';

import './CountryList.scss';

const CountryList: React.FC = () => {
  const isDarkTheme = localStorage.getItem('theme') === 'dark';

  const { data = [], isLoading, isError, error } = countriesApi.useFetchCountriesQuery(null);

  const { searchQuery, activeFilter } = useAppSelector((state) => state.countries);

  const filteredData = filterData(data, searchQuery, activeFilter).sort((a, b) =>
    a.name.common > b.name.common ? 1 : -1
  );

  if (isLoading) return <Preloader />;

  if (isError) {
    return (
      <h2
        style={
          isDarkTheme
            ? { textAlign: 'center', color: '#fff' }
            : { textAlign: 'center', color: '#000' }
        }
      >
        {JSON.stringify(error)}
      </h2>
    );
  }

  return (
    <section className="country-list">
      <div className="country-list__container">
        {!filteredData.length && (
          <h2
            style={
              isDarkTheme
                ? { textAlign: 'center', color: '#fff' }
                : { textAlign: 'center', color: '#000' }
            }
          >
            No match countries
          </h2>
        )}
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
