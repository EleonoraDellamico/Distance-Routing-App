import { useEffect, useState, useRef } from 'react';
import './App.css';
import * as tt from '@tomtom-international/web-sdk-maps';

const App = () => {
	const mapElement = useRef();
	const [ map, setMap ] = useState({});
	const [ longitude, setLongitude ] = useState(-3.6844995);
	const [ latitude, setLatitude ] = useState(40.4152606);

	useEffect(
		() => {
			let map = tt.map({
				key: process.env.REACT_APP_KEY_TOM_TOM,
				container: mapElement.current,
				stylesVisibility: {
					trafficIncidents: true,
					trafficFlow: true
				},
				center: [ longitude, latitude ],
				zoom: 14
			});
			setMap(map);
			const addMarker = () => {
				const marker = new tt.marker({
					draggable: true,
					element: element
				});
			};
			return () => map.remove();
		},
		[ longitude, latitude ]
	);
	return (
		<div className="App">
			<div ref={mapElement} className="map" />
			<div className="search-bar">
				<h1>Where to?</h1>
				<input
					type="text"
					id="longitude"
					className="longitude"
					placeholder="Put in longitude"
					onChange={(e) => {
						setLongitude(e.target.value);
					}}
				/>
				<input
					type="text"
					id="latitude"
					className="latitude"
					placeholder="Put in latitude"
					onChange={(e) => {
						setLatitude(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};

export default App;
