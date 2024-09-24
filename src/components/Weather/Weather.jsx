import { useState, useEffect } from "react";

export function Weather() {
  const [weather, setWeather] = useState();

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const pos = position.coords;
        // console.log(pos);
        // console.log(pos.latitude);
        // console.log(pos.longitude);
        const key = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=${key}&units=metric`
        );
        const data = await response.json();
        console.log(data);
        setWeather({
          // 온도
          temp: data.main.temp,
          // 습도
          humidity: data.main.humidity,
          // 현재 도시
          city: data.name,
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  // 컴포넌트 실행이 완료된 후 (jsx코드가 실행된 후)
  // useEffect가 실행
  useEffect(() => {
    getLocation();
  }, []);

  console.log(weather);

  return (
    <div className="weather">
      <p>온도 : {weather?.temp ?? "로딩중..."}℃ (❁´◡`❁)</p>
      <p>습도 : {weather?.humidity ?? "로딩중..."}% (●'◡'●)</p>
      <p>지역 : {weather?.city ?? "로딩중..."} ╰(*°▽°*)╯</p>
    </div>
  );
}
