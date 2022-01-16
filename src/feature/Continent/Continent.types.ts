export interface City {
  name: string;
  cover_photo_url: string;
  country: string;
  flag_url: string;
}

export interface Continent {
  code: string;
  name: string;
  cover_photo_url: string;
  description: string;
  stats: {
    countries: number;
    languages: number;
    cities: number;
  };
}
