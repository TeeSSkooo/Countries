import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Preloader from '../../components/preloader/Preloader';

import useAppSelector from '../../hooks/redux/useAppSelector';
import countriesApi from '../../api/countriesApi';

import arrowBackBlack from '../../assets/arrow-back-black.png';
import arrowBackWhite from '../../assets/arrow-back-white.png';

import './CountryDetailsPage.scss';

const CountryDetailsPage: React.FC = () => {
  useAppSelector((state) => state.countries.theme);

  const { name } = useParams();

  const { data, isLoading } = countriesApi.useFetchCountryByNameQuery(name ? name : '');

  const isDarkTheme = localStorage.getItem('theme') === 'dark';

  if (isLoading) {
    return (
      <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
        <Preloader />
      </div>
    );
  }

  const country = data?.[0];
  const nativeNameKey = Object.keys(country ? country.name.nativeName : {});
  // const currencyKey = Object.keys(country ? country.currencies : {});

  return (
    <>
      <Helmet>
        <meta name="description" content="Country details page" />
        <title>Countries | {country?.name.common}</title>
      </Helmet>
      <section className="details">
        <div className="details__container">
          <div className="details__link-wrapper">
            <Link className="details__back" to="/">
              <img
                className="arrow-back"
                src={isDarkTheme ? arrowBackWhite : arrowBackBlack}
                alt="Arrow back"
              />
              Back
            </Link>
          </div>
          <div className="details__inner">
            <div className="details__img">
              <img className="flag" src={country?.flags.svg} alt={country?.flags.alt} />
              <img className="coatOfArms" src={country?.coatOfArms.svg} alt="" />
            </div>
            <div className="details__content">
              <h2 className="details__name">{country?.name.official}</h2>
              <div className="details__native">
                <span>Native Name:</span>{' '}
                {country?.name.nativeName
                  ? country?.name.nativeName[nativeNameKey[0]]?.official
                  : 'None'}
              </div>
              <div className="details__population">
                <span>Population:</span>{' '}
                {new Intl.NumberFormat('ru-RU').format(country ? country?.population : 0)}
              </div>
              <div className="details__region">
                <span>Region:</span> {country?.region ? country?.region : 'None'}
              </div>
              <div className="details__sub-region">
                <span>Sub Region:</span> {country?.subregion ? country?.subregion : 'None'}
              </div>
              <div className="details__capital">
                <span>Capital:</span> {country?.capital ? country?.capital : 'None'}
              </div>
              <div className="details__area">
                <span>Area:</span>{' '}
                {new Intl.NumberFormat('ru-RU').format(country ? country?.area : 0)} km<sup>2</sup>
              </div>
              <div className="details__dependency">
                <span>Independent:</span> {country?.independent ? 'Yes' : 'No'}
              </div>
              {/* <div className="details__currency">
                <span>Currency:</span>{' '}
                {`${country?.currencies[currencyKey[0]]?.name}(${
                  country?.currencies[currencyKey[0]]?.symbol
                })`}
              </div> */}
              <div className="details__borders">
                <span>Borders:</span> {country?.borders?.join(', ') ?? 'None'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryDetailsPage;
