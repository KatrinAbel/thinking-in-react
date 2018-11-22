import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "e",
      stocked: false
    }
  }
  handleSearch = (newSearch) => {
    this.setState({
      search: newSearch
    })
  }
  handleStocked = (newStocked) => {
    this.setState({
      stocked: newStocked
    })
  }
  render() {
    let upperSearch = this.state.search.toUpperCase()
    let filteredProducts = this.props.products
      .filter(product => {
        if (this.state.stocked && !product.stocked) return false
        if (product.name.toUpperCase().includes(upperSearch)) return true
        return false
      })
      .sort((a,b) => (a.category > b.category ? 1 : -1))
    return (
      <div className="FilterableProductTable">
        <SearchBar 
          onSearch={this.handleSearch} 
          onStocked={this.handleStocked}
          search={this.state.search} 
          stocked={this.state.stocked} />
        <ProductTable products={filteredProducts} />
      </div>
    )
  }
}
