import React from 'react';

import CountryItemProps from '../../types/props/CountryItemProps';

import './CountryItem.scss';

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  return (
    <li className="item">
      <div className="item__group">
        <img src={country.flags.svg} alt="Flag" />
      </div>
      <div className="item__group">
        <h3 className="item__title">{country.name.official}</h3>
        <div className="item__population">
          <span>Population:</span> {country.population}
        </div>
        <div className="item__region">
          <span>Region:</span> {country.region}
        </div>
        <div className="item__capital">
          <span>Capital:</span> {country.capital}
        </div>
      </div>
    </li>
  );
};

export default CountryItem;
