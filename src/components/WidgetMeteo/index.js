import { useState, useEffect } from 'react';
import api from '../../api';

import WeatherIcons from 'react-weathericons';
import './styles.scss';

function App() {
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('Lyon')

  useEffect(() => {
    api.get('/', {
      params: {
        q: `${city}`,
        units: 'metric',
      }
    }).then((result) => {
      setTemp(result.data.main.temp);
    })
  }, []);

  return (
    <>
      <h1 className="widgetMeteo__title">Météo à {city}</h1>
      <div className="widgetMeteo">
        <div className="widgetMeteo__icon">
          <WeatherIcons name="day-haze" size="5x" />
        </div>
        <div className="widgetMeteo__temp">
        {
            (temp !== null)
              ? `${temp.toFixed(1)}°C`
              : (
                <span
                  className="widgetMeteo__loading-message"
                >
                  Récupération ...
                </span>
              )
          }
        </div>
      </div>
    </>
  );
}

export default App;
