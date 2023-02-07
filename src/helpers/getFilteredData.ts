import Country from '../types/Country';

export default function getFilteredData(
  data: Country[],
  searchQuery: string,
  activeFilter: string
): Country[] {
  const searchedData = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (activeFilter === 'all') return searchedData;

  const filteredData = searchedData.filter(
    (country) => country.region.toLowerCase() === activeFilter
  );

  return filteredData;
}
