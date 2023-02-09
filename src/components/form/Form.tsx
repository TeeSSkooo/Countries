import React, { useState } from 'react';

import useAppDispatch from '../../hooks/redux/useAppDispatch';
import { searchCountry, changeActiveFilter } from '../../features/countries/countriesSlice';

import arrowBlack from '../../assets/arrow-down-black.png';
import arrowWhite from '../../assets/arrow-down-white.png';
import searchBlack from '../../assets/search-black.svg';
import searchWhite from '../../assets/search-white.svg';

import './Form.scss';

const Form: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(
    localStorage.getItem('searchQuery')
  );
  const [filter, setFilter] = useState<string | null>(localStorage.getItem('filter'));

  const isDarkTheme: boolean = localStorage.getItem('theme') === 'dark';

  const dispatch = useAppDispatch();

  const queryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const targetValue = event.currentTarget.value;

    setSearchQuery(targetValue);
    dispatch(searchCountry(targetValue));
  };

  const regionChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const targetValue = event.currentTarget.value;

    setFilter(targetValue);
    dispatch(changeActiveFilter(targetValue));
  };

  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <div className="form__container">
        <div className="form__group">
          <img
            className="form__search-icon"
            src={isDarkTheme ? searchWhite : searchBlack}
            alt="Search"
          />
          <input
            className="form__search"
            type="text"
            placeholder="Search for a country..."
            value={searchQuery ? searchQuery : ''}
            onChange={queryChangeHandler}
          />
        </div>
        <div className="form__group">
          <select
            className="form__filter"
            defaultValue={filter ? filter : ''}
            onChange={regionChangeHandler}
          >
            <option disabled value="">
              Filter By Region
            </option>
            <option value="africa">Africa</option>
            <option value="americas">Amerika</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="all">All regions</option>
          </select>
          <img
            className="form__arrow"
            src={isDarkTheme ? arrowWhite : arrowBlack}
            alt="Arrow down"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
