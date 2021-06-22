import { useEffect, useState, useRef } from 'react';
import './App.css';
import * as tt from '@tomtom-international/web-sdk-maps';

const App = () => {
	const mapElement = useRef();
	const [ map, setMap ] = useState({});
	useEffect(() => {
		let map = tt.map({
			key: process.env.REACT_APP_KEY_TOM_TOM,
			container: mapElement.current
		});
		setMap(map);
	}, []);
	return (
		<div className="App">
			<div ref={mapElement} />
		</div>
	);
};

export default App;
