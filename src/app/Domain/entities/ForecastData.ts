export interface ForecastData {
  hourlyForecasts: HourlyForecast[];
}

export interface HourlyForecast {
  temperature: number;
  time: Date;
  // Otros datos relevantes del pronóstico por hora
}
