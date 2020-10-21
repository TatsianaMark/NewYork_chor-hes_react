import React from 'react';
import './App.css';

import {Map, YMaps} from "react-yandex-maps";






function App() {
    return (
        <div className="App">
            <YMaps>
                <div>My awesome application with maps!
                    <Map defaultState={{ center:  [55.75, 37.57], zoom: 15}} />
                </div>
            </YMaps>
        </div>
    );
}

export default App;