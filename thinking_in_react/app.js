//为什么一定要引用React呢？？？
import React from 'react';
import ReactDOM from 'react-dom';
import { PRODUCTS } from './data';
import { FilterableProductTable } from './components';

ReactDOM.render(
	<FilterableProductTable products = {PRODUCTS}/>,
	document.querySelector('#container')
);