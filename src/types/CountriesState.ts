export default interface CountriesState {
  searchQuery: string;
  activeFilter: 'all' | 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';
  isDarkTheme: boolean;
}
