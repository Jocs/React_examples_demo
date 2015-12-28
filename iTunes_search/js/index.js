import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//import semantic UI
import 'imports?$=jquery,jQuery=jquery!../bower_components/semantic/dist/semantic.js';
import '../bower_components/semantic/dist/semantic.css';


render(
	<App/>,
	document.querySelector('#container')
);