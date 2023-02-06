import React, { useState } from 'react';

import './Form.scss';

const Form: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [region, setRegion] = useState<string>('');

  const queryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.currentTarget.value);
  };

  const regionChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setRegion(event.currentTarget.value);
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
          <select className="form__filter" defaultValue={region} onChange={regionChangeHandler}>
            <option disabled value="">
              Filter By Region
            </option>
            <option value="africa">Africa</option>
            <option value="amerika">Amerika</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
