export default interface Country {
  name: {
    common: string;
    official: string;
  };
  independent: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: string[];
  area: number;
  population: number;
  flags: {
    svg: string;
  };
  coatOfArms: {
    svg: string;
  };
  borders: string[];
}
