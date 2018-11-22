import React from 'react'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'

export default function ProductTable({products}) {
  console.log(products);

  let rows = []
  for (let i = 0; i < products.length; i++) {
    if (i === 0 || products[i].category !== products[i-1].category) {
      rows.push(<ProductCategoryRow key={i} category={products[i].category} />)
    }
    rows.push(<ProductRow key={i} name={products[i].name} price={products[i].price} stocked={products[i].stocked} />)
  }
  
  return (
    <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}
