import { DateTime } from "luxon";

const API_KEY = "3fb11bd030ed476b78ea9bf08e32c698";
const BASE_URL = "https://api.openweathermap.org/data/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  // https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=d879bb5bbd714569d365a149ec0e63b8

  //https://api.openweathermap.org/data/3.0/onecall?lat=51.507359&lon=-0.136439&exclude=minutely&units=metric&appid=3fb11bd030ed476b78ea9bf08e32c698

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed, deg },
    visibility,
  } = data;

  const { main: details, icon } = weather[0];
  console.log(data);

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    deg,
    visibility,
    pressure,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily } = data;
  console.log(daily);
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      temp_max: d.temp.max,
      temp_min: d.temp.min,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "2.5/weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("3.0/onecall", {
    lat,
    lon,
    exclude: "current, minutely, alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `./${code}.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
