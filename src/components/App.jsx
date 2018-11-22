import React, { Component } from 'react';
import jsonProducts from '../products'
import FilterableProductTable from './FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={jsonProducts} />
      </div>
    );
  }
}

export default App;
