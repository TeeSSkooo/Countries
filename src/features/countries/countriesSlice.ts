import { createSlice } from '@reduxjs/toolkit';

import CountriesState from '../../types/CountriesState';

const initialState: CountriesState = {
  searchQuery: '',
  activeFilter: 'all',
  theme: 'light',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchCountry(state, action) {
      state.searchQuery = action.payload;
      localStorage.setItem('searchQuery', action.payload);
    },
    changeActiveFilter(state, action) {
      state.activeFilter = action.payload;
      localStorage.setItem('filter', action.payload);
    },
    changeColorTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export default countriesSlice.reducer;

export const { searchCountry, changeActiveFilter, changeColorTheme } = countriesSlice.actions;
