import React from 'react';
import Radium from 'radium';
import ribbon from '../../css/img/ribbon.png';

const style = {
	position: 'absolute',
	top: 0,
	right: 0,
	border: 'none',
	'@media (max-width: 980px)': {
		display: 'none'
	}
};

const Ribbon = () => (
	<a href='http://github.com/Jocs' target='_blank'>
		<img src = {ribbon.indexOf('dist') === -1 ? 'dist/' + ribbon : ribbon.substring(1)} style = {style}/>
	</a>
);

export default Radium(Ribbon);