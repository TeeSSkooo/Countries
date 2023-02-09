export default interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
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
  languages: {
    [key: string]: string;
  };
  area: number;
  population: number;
  flags: {
    svg: string;
    alt: string;
  };
  coatOfArms: {
    svg: string;
  };
  borders: string[];
}
