import { useEffect, useState } from "react";

const FORECAST_DATES = ["TODAY", "TOMORROW", "NEXT"];

export default function Weather(props) {
  const {
    userInfo: { postal_code },
  } = props;

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getWeatherForecastData() {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_WEATHERAPI_KEY
        }&q=${postal_code}}&days=3&aqi=no&alerts=no`
      );

      const data = await response.json();
      setWeatherData(data);
    }

    getWeatherForecastData();
  }, []);

  return (
    <div className='w-[575px] h-[200px] flex justify-around items-center'>
      {weatherData?.forecast.forecastday.map((day, i) => (
        <Day key={i} day={day} date={FORECAST_DATES[i]} />
      ))}
    </div>
  );
}

function Day(props) {
  const {
    day: {
      day: { maxtemp_f, mintemp_f, condition },
    },
    date,
  } = props;

  return (
    <div className='flex flex-col items-center'>
      <div className="text-white text-xl font-normal font-['Inter'] uppercase leading-7 tracking-[4px]">
        {date}
      </div>
      <div className="text-white text-lg font-medium font-['Inter'] leading-7">
        {maxtemp_f}&#176; / {mintemp_f}&#176;
      </div>
      <img src={condition.icon} />
      <div className="text-white text-lg font-bold font-['Inter'] leading-7">
        {condition.text}
      </div>
    </div>
  );
}
