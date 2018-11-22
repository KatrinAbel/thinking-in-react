import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
  render() {
    let filteredProducts = this.props.products.sort((a,b) => (a.category > b.category ? 1 : -1))
    return (
      <div className="FilterableProductTable">
        <SearchBar />
        <ProductTable products={filteredProducts} />
      </div>
    )
  }
}
