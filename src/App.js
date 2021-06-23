import { useEffect, useState, useRef } from 'react';
import './App.css';
import * as tt from '@tomtom-international/web-sdk-maps';

const App = () => {
	const mapElement = useRef();
	const [ map, setMap ] = useState({});
	const [ longitude, setLongitude ] = useState(-3.6844995);
	const [ latitude, setLatitude ] = useState(40.4152606);

	useEffect(() => {
		let map = tt.map({
			key: process.env.REACT_APP_KEY_TOM_TOM,
			container: mapElement.current,
			center: [ longitude, latitude ],
			zoom: 14
		});
		setMap(map);
	}, []);
	return (
		<div className="App">
			<div ref={mapElement} className="map" />
		</div>
	);
};

export default App;
