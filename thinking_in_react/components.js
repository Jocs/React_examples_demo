import React from 'react';

class ProductCategoryRow extends React.Component {
	render () {
		return (
			<tr>
				<th>{this.props.category}</th>
			</tr>
		);
	}
}
class ProductRow extends React.Component {
	render () {
		let name = this.props.product.stocked ? 
							 this.props.product.name : 
							 <span className = 'text-danger'>
							 {this.props.product.name}
							 </span>
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
}
class ProductTable extends React.Component {
	render () {
		let rows = [], lastCategory = null, products = this.props.products;
		products.forEach(function( product ){
			if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
				return;
			}
			if(product.category !== lastCategory){
				rows.push(<ProductCategoryRow category = {product.category} key={product.category}/>);
			}
			rows.push(<ProductRow product = {product} key={product.name}/>);
			lastCategory = product.category;
		}, this);

		return (
			<table className='table table-striped'>
				<thead>
					<tr><th>Name</th><th>Price</th></tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);

	}
}

class SearchBar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			text : this.props.filterText,
			inStockOnly: this.props.inStockOnly
		};
	}

	render () {
		return(
			<form>
				<div className = 'form-group'>
					<input
					type = 'text'
					placeholder = 'Searching...'
					className = 'form-control'
					value = {this.state.text}
					onChange = {this.handleChange.bind(this)}
					/>
				</div>
				<div className = 'form-group'>
					<input
					type = 'checkbox'
					checked = {this.state.inStockOnly}
					onChange = {this.handleChange.bind(this)}
					/>
					<label>&nbsp;Only show products in stock</label>
				</div>
			</form>
		);
	}
	handleChange ( event ) {
		let target = event.target;
		let update = target.type === 'text' ? {text: target.value} : {inStockOnly: target.checked};
		//this.setState(object, callback);可以接受一个回调函数
		this.setState( Object.assign({}, this.state, update), () => {
			this.props.onUserInput(this.state.text, this.state.inStockOnly);
		} );
	}
}

class FilterableProductTable extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};
	}

	render () {
		return(
			<div className = 'container'>
				<SearchBar 
				filterText = {this.state.filterText}
				inStockOnly = {this.state.inStockOnly}
				onUserInput = {this.handleUserInput.bind(this)}
				/>
				<ProductTable
				filterText = {this.state.filterText}
				products = {this.props.products}
				inStockOnly = {this.state.inStockOnly}
				/>
			</div>
		)
	}
	handleUserInput (filterText, inStockOnly) {
		this.setState({
			filterText, 
			inStockOnly
		});
	}

}
export { FilterableProductTable };


