import './App.css';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import 'react-colorful/dist/index.css';

//import ColorList from 'react-color-list';

function App() {
	const [color, setColor] = useState('#aabbcc');
	const handleBackground = (color) => {
		document.body.style.background = color;
	};
	return (
		<>
			<div>
				<h1 style={{ color: `#fff`, boxShadow: `0 0 2px rgba(0,0,0,0.2)`, padding: `5px` }}>
					Simple background color picker
				</h1>
				<HexColorPicker
					color={color}
					onChange={(e) => {
						setColor(e);
						handleBackground(e);
					}}
				/>
			</div>
		</>
	);

	//Para una lista de colores utilizar react-color-list
	/* const [colors, setColors] = useState([])
  
	return (
		<>
			<ColorList colors={colors} colorFormat="hex" onChange={(c) => setColors(c)} />
		</>
  ); */
}

export default App;
