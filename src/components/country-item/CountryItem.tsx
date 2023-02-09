import { Link } from 'react-router-dom';

import CountryItemProps from '../../types/props/CountryItemProps';

import './CountryItem.scss';

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  return (
    <li className="item">
      <Link to={`/country/${country.name.common}`}>
        <div className="item__group">
          <img src={country.flags.svg} alt={country.flags.alt} />
        </div>
        <div className="item__group">
          <h3 className="item__name">{country.name.common}</h3>
          <div className="item__population">
            <span>Population:</span> {new Intl.NumberFormat('ru-RU').format(country.population)}
          </div>
          <div className="item__region">
            <span>Region:</span> {country.region}
          </div>
          <div className="item__capital">
            <span>Capital:</span> {country.capital ? country.capital : 'None'}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CountryItem;
