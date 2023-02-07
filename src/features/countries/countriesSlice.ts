import { createSlice } from '@reduxjs/toolkit';

import CountriesState from '../../types/CountriesState';

const initialState: CountriesState = {
  searchQuery: '',
  activeFilter: 'all',
  isDarkTheme: false,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchCountry(state, action) {
      state.searchQuery = action.payload;
    },
    changeActiveFilter(state, action) {
      state.activeFilter = action.payload;
    },
    changeColorTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export default countriesSlice.reducer;

export const { searchCountry, changeActiveFilter, changeColorTheme } = countriesSlice.actions;
