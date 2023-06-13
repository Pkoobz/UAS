import React from 'react';
import ReactDOM from 'react-dom';
import Map from './place.jsx';

function renderMap() {
  ReactDOM.render(<Map />, document.getElementById('map'));
}

renderMap();
