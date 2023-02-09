export default interface CountriesState {
  searchQuery: string;
  activeFilter: 'all' | 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';
  theme: 'light' | 'dark';
}
