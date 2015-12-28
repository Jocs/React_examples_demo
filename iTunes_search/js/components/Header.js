import React, { Component } from 'react';
import $ from 'jquery';
import emitter from '../emitter';

class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {media : 'all'};
	}

	componentDidMount () {
		const self = this;
		//initialize semantic UI dropdown
		
		$('.ui.dropdown').dropdown({
			onChange (value) {
				self.setState({
					media: value
				});

				self.state.query && emitter.emit('search', self.state);

			}
		});
		
	}

	componentWillUnmount () {
		$('.ui.dropdown').dropdown('refresh');
	}

	_search (e) {
		e.keyCode === 13 && emitter.emit('search', this.state);
	}

	_change (e) {
		this.setState({query: e.target.value});
	}

	render () {
		return(
			<div className='ui inverted vertical segment center aligned'>
				<div className='ui right action left icon input'>
					<i className='search icon'></i>
					<input type='text'
					onChange = {this._change.bind(this)}
					onKeyDown = {this._search.bind(this)}
					placeholder='Searching...'
					autoFocus
					/>
					<div className='ui dropdown button'>
						<div className='text'>All</div>
						<i className='dropdown icon'></i>
						<div className='menu'>
							<div className='item'>All</div>
							<div className='item'>Audiobook</div>
							<div className="item">eBook</div>
              <div className="item">Movie</div>
              <div className="item">Music</div>
              <div className="item">Music Video</div>
              <div className="item">Podcast</div>
              <div className="item">TV Show</div>
              <div className="item">Short Film</div>
              <div className="item">Software</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

