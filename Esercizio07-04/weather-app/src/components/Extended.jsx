import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../App.css";
import { TbWind } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { SiRainmeter } from "react-icons/si";
import Error from "./Error";
import Loading from "./Loading";

const Extended = () => {
  const Dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const locationLat = useSelector((state) => state.lat);
  const locationLon = useSelector((state) => state.lon);
  const WeatherDaily = useSelector((state) => state.weatherDaily);

  const baseEndpointWeatherDaily =
    "http://api.openweathermap.org/data/2.5/forecast?appid=563305e5f5efd440d89a1e8bbc5871ed&units=metric&";

  const getWeatherDaily = async () => {
    try {
      const response = await fetch(
        `${baseEndpointWeatherDaily}&lon=${locationLon}&lat=${locationLat}`
      );
      if (response.ok) {
        const weather = await response.json();
        console.log(weather);
        Dispatch({ type: "WEATHERDAILY", payload: weather });
        setIsLoading(false);
        setIsError(false);
      } else {
        alert("Error fetching results weatherDaily");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getWeatherDaily();
    setIsLoading(true);
  }, [locationLon, locationLat]);

  return (
    <Row className="d-flex justify-content-start mt-2 ps-5 g-3 w-100 ">
      <h2 className="text-dark text-start w-75 ms-5 ps-5 fs-1 fw-bold">
        Next days
      </h2>

      <Col xs={11} className="d-flex justify-content-center">
        {isError && !isLoading && <Error />}
        {!isError && isLoading && <Loading />}

        {WeatherDaily &&
          !isError &&
          !isLoading &&
          WeatherDaily.list
            .filter((el, i) => i % 8 === 0)
            .map((element, i) => (
              <Col key={`weather-${i}`} className="myCard mx-3" xs={2}>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center m-4 fw-bold">
                    <h6 className="text-dark date">
                      {element.dt_txt.slice(0, 16)}
                    </h6>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h1 className="mt-4 textCardExtended">
                      {element.main.temp.toFixed(1)} °C
                    </h1>
                    <p className="textCardExtended text-primary">
                      {element.weather[0].description}
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-between align-items-center m-4 me-0 mb-0">
                    <div className="d-flex flex-column align-items-start">
                      <p className="text-dark">
                        <TbWind />
                        {element.wind.speed} km/h
                      </p>
                      <p className="text-dark">
                        <WiHumidity />
                        {element.main.humidity} %
                      </p>
                      
                    </div>

                    <img
                      src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                      alt="icon"
                    />
                  </div>
                </div>
              </Col>
            ))}
      </Col>
    </Row>
  );
};
export default Extended;
