import React from 'react';
import Item from './Item';

const List = ({results, resultCount}) => (
	<div className='ui link cards'>
		{resultCount > 0 ? results.map((result, index) => <Item key={index} {...result} />) : null}
	</div>
);

export default List;