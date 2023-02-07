import React, { useState } from 'react';

import useAppDispatch from '../../hooks/redux/useAppDispatch';
import { searchCountry, changeActiveFilter } from '../../features/countries/countriesSlice';

import './Form.scss';

const Form: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

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
          <input
            className="form__search"
            type="text"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={queryChangeHandler}
          />
        </div>
        <div className="form__group">
          <select className="form__filter" defaultValue={filter} onChange={regionChangeHandler}>
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
        </div>
      </div>
    </form>
  );
};

export default Form;
