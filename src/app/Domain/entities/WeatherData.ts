export interface WeatherData {
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
  weather: {
    description: string;
  }[];
}
