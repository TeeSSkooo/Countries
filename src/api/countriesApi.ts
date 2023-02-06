import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Country from '../types/Country';

const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: (builder) => ({
    fetchCountries: builder.query<Country[], null>({
      query: () => '/all',
    }),
    searchCountries: builder.query<Country[], string>({
      query: (name) => `/name/${name}`,
    }),
  }),
});

export default countriesApi;
