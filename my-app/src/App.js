import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import {Map, YMaps} from "react-yandex-maps";


function App() {
  return (

      <div className="App">

        <YMaps>
          <div>My awesome application with maps!
            <Map className="map" defaultState={{ center:  [55.75, 37.57], zoom: 10,
                searchControlProvider: 'yandex#search'
            }} />
              <input type="button" value="Развернуть/Cвернуть" id="toggler"/>
              <input type="checkbox" value="Изменить размеры карты" id="checkbox"/>
              <label htmlFor="checkbox">Информировать карту</label>
          </div>
        </YMaps>
      </div>
  );
}

export default App;
