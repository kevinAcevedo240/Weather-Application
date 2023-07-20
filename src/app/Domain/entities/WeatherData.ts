export interface WeatherData {
  coord: {
    lon: number,
    lat: number
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  visibility: number;
  main: {
    pressure: number;
    humidity: number;
    temp: number;
  };
  wind: {
    speed: number,
    deg: number
    },
  weather: {
    description: string;
    icon: string;
  }[];
}
